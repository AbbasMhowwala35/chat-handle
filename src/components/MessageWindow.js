import React, { useEffect, useState } from 'react';
import { Badge, Carousel, Form } from 'react-bootstrap';
import img1 from '../images/2.jpeg';
import img2 from '../images/ai.jpg';

const MessageWindow = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hi there! I’m Mr. Lynx, your AI assistant. Let me help you find the perfect expert! Simply describe the person you’re searching for, and I’ll connect you with the best fit.', sender: 'bot' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [attachment, setAttachment] = useState(null);
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [threadId, setThreadId] = useState(null);

  const handleSendMessage = async () => {
    if (newMessage.trim() || attachment) {
      const userMessage = {
        id: messages.length + 1,
        text: newMessage || 'File Attached',
        sender: 'user',
        attachment,
      };
      setMessages([...messages, userMessage]);
      try {
        const response = await fetch('https://cors-anywhere.herokuapp.com/http://3.108.123.184:4000/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: newMessage,
            threadId: threadId,
          }),
        });
        if (response.ok) {
          const data = await response.json();
          const botMessage = {
            id: messages.length + 2,
            text: data.response,
            sender: 'bot',
          };
          setMessages((prev) => [...prev, botMessage]);
          if (data.profiles) {
            const parsedProfiles = data.profiles.map((profile, index) => ({
              id: index + 1,
              name: profile[0],
              profession: profile[1],
              location: profile[3],
              avatar: profile[4] || 'https://via.placeholder.com/50',
            }));
            setFilteredProfiles(parsedProfiles);
            // Add profiles to messages as a new bot message
            setMessages((prev) => [
              ...prev,
              {
                id: prev.length + 1,
                text: 'Here are some relevant profiles:',
                sender: 'bot',
              },
            ]);
            setMessages((prev) => [
              ...prev,
              ...parsedProfiles.map((profile) => ({
                id: prev.length + 1,
                text: `${profile.name}, ${profile.profession}, ${profile.location}. 
                <a href="${profile.avatar}" target="_blank" rel="noopener noreferrer" style="font-size: 0.9rem; color: #007bff; text-decoration: underline;">
                  View Profile
                </a>`,
                sender: 'bot',
              })),
            ]);
          }
        } else {
          console.error('Failed to fetch data from the API');
        }
      } catch (error) {
        console.error('Error sending message:', error);
      }
      setNewMessage('');
      setAttachment(null);
    }
  };

  const handleAttachmentChange = (event) => {
    if (event.target.files) {
      setAttachment(event.target.files[0]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleSearch = (searchText) => {
    setNewMessage(''); // Clear message box on search
    // Handle your search logic here (if applicable)
    // Append a message for search (if needed)
    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        text: `Searching for: ${searchText}`,
        sender: 'user',
      },
    ]);
  };

  useEffect(() => {
    const fetchThreadId = async () => {
      try {
        const startResponse = await fetch('https://cors-anywhere.herokuapp.com/http://3.108.123.184:4000/api/start', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({}),
        });
        if (!startResponse.ok) {
          console.error('Failed to fetch thread ID');
          return;
        }
        const startData = await startResponse.json();
        setThreadId(startData.threadId);
      } catch (error) {
        console.error('Error fetching thread ID:', error);
      }
    };
    fetchThreadId();
  }, []);

  return (
    <div
      className="chat-window"
      style={{
        padding: '0',
        background: 'url("https://i.ibb.co/LZS1pzc/Unknown.jpg")',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
      }}
    >
      <div className="message-header">
        <div className="content">
          <div className="user-item read">
            <img src={img2} alt="Ghanshyam Rawat" className="avatar me-2" />
            <div className="user-details">
              <h6 style={{ marginBottom: '2px' }}>AI Bot</h6>
              <p style={{ color: '#21d07a' }}>Online</p>
            </div>
            <div className="user-meta ms-auto"></div>
          </div>
        </div>
      </div>
      <div className="message-window">
        <div className="message-card d-none mb-3">
          <Carousel interval={3000} controls={false}>
            {[...Array(3)].map((_, i) => (
              <Carousel.Item key={i}>
                <div className="slider-card">
                  <div className="slider-text">
                    <h4>Avail personal <br /> loans from ₹5K to <br /> ₹10L in minutes!</h4>
                  </div>
                  <div className="image-box"></div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message-container ${message.sender === 'bot' ? 'bot' : 'user'}`}
            >
              <div className={`message-bubble ${message.sender === 'bot' ? 'bot' : 'user'}`}>
              <div
                  key={index}
                  className={`message-container ${message.sender === 'bot' ? 'bot' : 'user'} d-block`}
                  dangerouslySetInnerHTML={{ __html: message.text }}
                />

                {message.attachment && (
                  <div className="attachment-preview">
                    <strong>Attached: </strong> {message.attachment.name}
                  </div>
                )}
              </div>
            </div>
          ))}
          {/* {filteredProfiles.length > 0 &&
            filteredProfiles.map((profile) => (
              <div
                key={profile.id}
                className="profile-item d-flex align-items-center mb-2 bg-light p-3 m-3"
              >
                <div>
                  <h6 className="mb-0">{profile.name}</h6>
                  <p className="mb-0">
                    {profile.profession}, {profile.location}
                  </p>
                  <a
                    href={profile.avatar}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.9rem', color: '#007bff', textDecoration: 'underline' }}
                  >
                    View Profile
                  </a>
                </div>
              </div>
            ))} */}
        </div>
        <div className="message-input">
          <label htmlFor="attachment" className="attachment-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="15"
              viewBox="0 0 17 15"
              fill="none"
            >
              <path
                d="M3.24694 14.9763C2.38586 14.9763 1.55993 14.6194 0.95105 13.984C0.342174 13.3487 0.000131465 12.487 3.61037e-08 11.5885C-0.000128304 10.6899 0.341911 9.8281 0.950689 9.19261L8.41287 1.40598C9.57493 0.193401 11.2688 -0.280188 12.8561 0.163675C14.4437 0.607504 15.6835 1.90141 16.109 3.55782C16.5343 5.21437 16.0805 6.9817 14.9183 8.19428L12.0501 11.1872C11.9492 11.2961 11.8108 11.3582 11.6656 11.3595C11.5204 11.3609 11.3808 11.3013 11.2782 11.1941C11.1756 11.087 11.1185 10.9414 11.1197 10.79C11.121 10.6385 11.1804 10.4938 11.2849 10.3887L14.1531 7.3958V7.39567C15.0418 6.46834 15.3887 5.11687 15.0634 3.85019C14.7381 2.5835 13.7899 1.59401 12.5758 1.25479C11.3619 0.915417 10.0235 1.23362 9.23151 2.26213L2.76935 10.0489C2.67045 10.1587 2.50355 10.2166 2.34446 10.2166C2.18537 10.2166 2.01847 10.1587 1.91957 10.0489C1.82067 9.9391 1.82067 9.78095 1.91957 9.67114L9.38175 1.88448C9.91773 1.26149 11.1874 1.22256 11.7482 1.81077C12.3092 2.39898 12.3092 3.3681 11.7482 3.9576L4.38046 11.7445C3.97399 12.2718 3.38193 12.4955 2.78123 12.4876L3.24694 14.9763Z"
                fill="#000"
              ></path>
            </svg>
          </label>
          <input
            type="text"
            className="form-control"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button className="btn btn-primary" onClick={handleSendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageWindow;
