import React, { useState } from 'react';
import { Badge, Carousel, Form, Stack } from 'react-bootstrap';
import img1 from '../images/2.jpeg';
const MessageWindow = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hi there! I’m Mr. Lynx, your AI assistant. Let me help you find the perfect expert! Simply describe the person you’re searching for, and I’ll connect you with the best fit.', sender: 'bot' },
    { id: 2, text: 'I need to find a project manager.', sender: 'user' },
    { id: 3, text: 'Could you please provide me with more details? For instance, are you looking for a project manager in a specific industry or location? Additionally, do you have any preferences regarding their experience or qualifications?', sender: 'bot' },
    { id: 4, text: 'Hi Faiz, thanks for reaching our and Ill respond to your message soon', sender: 'bot' },
    { id: 5, text: 'Are you open to a token payment for my time and that gets you a confirmed response to the message in the next 2-days', sender: 'bot' },
    { id: 6, text: 'Could you please provide me with more details? For instance, are you looking for a project manager in a specific industry or location? Additionally, do you have any preferences regarding their experience or qualifications?', sender: 'bot' },
    { id: 7, text: 'Thank you for appreciating my time and your message is priority!!', sender: 'bot' },
    { id: 8, text: 'A payment transaction on UPI will be requested post my response to you', sender: 'bot' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [attachment, setAttachment] = useState(null);
  const handleSendMessage = () => {
    if (newMessage.trim() || attachment) {
      setMessages([...messages, { id: messages.length + 1, text: newMessage || 'File Attached', sender: 'user', attachment }]);
      setNewMessage('');
      setAttachment(null);
    }
  };
  const handleAttachmentChange = (event) => {
    setAttachment(event.target.files[0]);
  };
  return (
    <div className='chat-window' style={{
      padding: '0',
      background: 'url("https://i.ibb.co/LZS1pzc/Unknown.jpg")',
      backgroundSize: 'contain',
      backgroundPosition: 'center'
    }}>
      <div className="message-header">
        <div className="content">
          <div className="user-item read">
            <img 
              src={img1}
              alt="Ghanshyam Rawat" 
              className="avatar me-2" 
            />
            <div className="user-details">
              <h6 style={{ marginBottom: '2px' }}>Ghanshyam Rawat</h6>
              <p style={{ color: '#21d07a' }}>Online</p>
            </div>
            <div className="user-meta ms-auto"></div>
          </div>
        </div>
      </div>
      <div className="message-window">
        <div className="messages">
        {messages.map((message, index) => (
            <div
              key={index}
              className={`message-container ${message.sender === 'bot' ? 'bot' : 'user'} ${message.id === 3 ? 'd-block' : ""}`}
            >
              <div className={`message-bubble ${message.sender === 'bot' ? 'bot' : 'user'}`}>
                {message.text}
                {message.attachment && (
                  <div className="attachment-preview">
                    <strong>Attached: </strong> {message.attachment.name}
                  </div>
                )}
                {message.id === 5 && (
                  <div className="btn-boxs">
                      <button type='button' className='btn btn-primary'>No</button>
                      <button type='button' className='btn btn-primary'>Yes</button>
                  </div>
                )}  
                {message.id === 6 && (
                  <div className="btn-box">
                    <div>
                      <button type='button' className='btn btn-primary'>No</button>
                      <button type='button' className='btn btn-primary'>Yes</button>
                      </div>
                      <Form>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Control type="email" placeholder="Please Put Amount" />
                        </Form.Group>
                      </Form>
                  </div>
                  
                )}  
              </div>
              {message.id === 3 && (<div className='badeges-box'>
                <Badge bg="light" text="dark" className={`badge-bubble ${message.sender === 'bot' ? 'bot' : 'user'}`}>
                    Mumbai
                  </Badge>
                  <Badge bg="light" text="dark" className={`badge-bubble ${message.sender === 'bot' ? 'bot' : 'user'}`}>
                    Indore
                  </Badge>
                  <Badge bg="light" text="dark" className={`badge-bubble ${message.sender === 'bot' ? 'bot' : 'user'}`}>
                    Delhi
                  </Badge>
                  <Badge bg="light" text="dark" className={`badge-bubble ${message.sender === 'bot' ? 'bot' : 'user'}`}>
                    Bangalore
                  </Badge>
                </div>)}
            </div>
          ))}
          
          <div className="message-card d-none">
            <Carousel interval={3000} controls={false}>
              <Carousel.Item>
                <div className="slider-card">
                  <div className="slider-text">
                    <h4>Avail personal <br /> loans from ₹5K to <br /> ₹10L in minutes!</h4>
                  </div>
                  {/* <img src="path-to-image/loan1.png" alt="Loan 1" /> */}
                  <div className='image-box'></div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className="slider-card">
                  <div className="slider-text">
                    <h4>Avail personal <br /> loans from ₹5K to <br /> ₹10L in minutes!</h4>
                  </div>
                  {/* <img src="path-to-image/loan1.png" alt="Loan 1" /> */}
                  <div className='image-box'></div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className="slider-card">
                  <div className="slider-text">
                    <h4>Avail personal <br /> loans from ₹5K to <br /> ₹10L in minutes!</h4>
                  </div>
                  {/* <img src="path-to-image/loan1.png" alt="Loan 1" /> */}
                  <div className='image-box'></div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <div className="message-input">
          <label htmlFor="attachment" className="attachment-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
              <path d="M3.24694 14.9763C2.38586 14.9763 1.55993 14.6194 0.95105 13.984C0.342174 13.3487 0.000131465 12.487 3.61037e-08 11.5885C-0.000128304 10.6899 0.341911 9.8281 0.950689 9.19261L8.41287 1.40598C9.57493 0.193401 11.2688 -0.280188 12.8561 0.163675C14.4437 0.607504 15.6835 1.90141 16.109 3.55782C16.5343 5.21437 16.0805 6.9817 14.9183 8.19428L12.0501 11.1872C11.9492 11.2961 11.8108 11.3582 11.6656 11.3595C11.5204 11.3609 11.3808 11.3013 11.2782 11.1941C11.1756 11.087 11.1185 10.9414 11.1197 10.79C11.121 10.6385 11.1804 10.4938 11.2849 10.3887L14.1531 7.3958V7.39567C15.0418 6.46834 15.3887 5.11687 15.0634 3.85019C14.7381 2.5835 13.7899 1.59401 12.5758 1.25479C11.3619 0.915417 10.0668 1.27769 9.17809 2.20502L1.71656 9.99096C1.1798 10.5636 0.973823 11.3901 1.17517 12.163C1.37655 12.9359 1.95513 13.5398 2.69583 13.7501C3.43653 13.9604 4.22846 13.7455 4.7774 13.1856L12.2396 5.39894C12.4446 5.18492 12.5246 4.873 12.4494 4.58064C12.3743 4.28828 12.1555 4.06005 11.8753 3.98171C11.5951 3.90349 11.2962 3.9872 11.0911 4.20121L5.15975 10.3905L5.15988 10.3903C5.059 10.4994 4.92051 10.5615 4.77535 10.5628C4.63019 10.564 4.49054 10.5044 4.388 10.3974C4.28532 10.2903 4.2282 10.1447 4.22949 9.99324C4.23077 9.84176 4.2902 9.69712 4.39467 9.59186L10.326 3.4026L10.3259 3.40273C10.8079 2.92218 11.4964 2.7414 12.139 2.92661C12.7815 3.11183 13.2833 3.63591 13.4604 4.30647C13.6377 4.97706 13.4639 5.69545 13.0031 6.19794L5.5426 13.9825C4.93527 14.6205 4.10868 14.9784 3.24697 14.9764L3.24694 14.9763Z" fill="black"/>
            </svg>
            <input
              type="file"
              id="attachment"
              onChange={handleAttachmentChange}
              style={{ display: 'none' }}
            />
          </label>

          <input
            type="text"
            placeholder="Type here!"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />

          <button onClick={handleSendMessage}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10.568 10.1968L3.03601 11.4528C2.94942 11.4673 2.86815 11.5043 2.80039 11.5601C2.73263 11.6159 2.68077 11.6886 2.65001 11.7708L0.0530096 18.7278C-0.19499 19.3678 0.47401 19.9778 1.08801 19.6708L19.088 10.6708C19.2127 10.6086 19.3175 10.5128 19.3908 10.3943C19.4641 10.2758 19.503 10.1392 19.503 9.99984C19.503 9.86049 19.4641 9.72389 19.3908 9.60537C19.3175 9.48685 19.2127 9.39109 19.088 9.32884L1.08801 0.32884C0.47401 0.0218396 -0.19499 0.63284 0.0530096 1.27184L2.65101 8.22884C2.68162 8.31125 2.73343 8.38414 2.8012 8.44014C2.86897 8.49615 2.9503 8.5333 3.03701 8.54784L10.569 9.80284C10.6154 9.81096 10.6574 9.83516 10.6876 9.8712C10.7179 9.90723 10.7345 9.95278 10.7345 9.99984C10.7345 10.0469 10.7179 10.0925 10.6876 10.1285C10.6574 10.1645 10.6154 10.1887 10.569 10.1968H10.568Z" fill="#35C835"/>
            </svg>
          </button>
        </div>
      </div>
      </div>
  );
};

export default MessageWindow;
