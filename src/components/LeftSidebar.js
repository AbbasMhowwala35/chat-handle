import React from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';

import img1 from '../images/1.jpeg';
import img2 from '../images/2.jpeg';
import img3 from '../images/3.jpeg';
import img4 from '../images/4.jpeg';
import img5 from '../images/ai.jpg';
// import img5 from '../images/logos/upwards.svg';
import img6 from '../images/logos/hdfc.svg';
import img7 from '../images/logos/muthoot.svg';
import img8 from '../images/logos/kotak.svg';

const LeftSidebar = () => {
  const users = [
    {
      id: 1,
      name: 'AI Bot',
      message: 'Text me',
      unread: 1,
      timestamp: '19:48',
      avatar: img5,
      isUnread: true
    },
    {
      id: 2,
      name: 'Ghanshyam Rawat',
      message: 'Co-Founder & CFO',
      unread: 0,
      timestamp: '19:48',
      avatar: img2,
      isUnread: false
    },
    {
      id: 3,
      name: 'Mekin Maheshwari',
      message: 'Founder & CEO Udhyam Learning Foundation',
      unread: 0,
      timestamp: '19:48',
      avatar: img3,
      isUnread: false
    },
    {
      id: 4,
      name: 'Ankit Tandon',
      message: 'Global CBO and CEO South East Asia Middle East & China',
      unread: 0,
      timestamp: '19:48',
      avatar: img4,
      isUnread: false
    },
    {
      id: 5,
      name: 'Selva Prakash',
      message: 'Cofounder at LyncLearn',
      unread: 0,
      timestamp: '19:48',
      avatar: img1,
      isUnread: false
    }
  ];
  const getRandomColor = () => {
    const pastelColors = ['#FFB3BA', '#FFDFBA', '#FFFFBA', '#BAFFC9', '#BAE1FF', '#FADADD', '#C2E0F4', '#F1E1F5'];
    return pastelColors[Math.floor(Math.random() * pastelColors.length)];
  };  
  
  return (
    <div className="left-sidebar">
      <div className="d-flex align-items-center p-3">
        <FaBars className="me-3" />
        <div className="search-bar">
          <FaSearch className='icon-user' />
          <input type="text" placeholder="Search" className="form-control" />
        </div>
      </div>
      <div className="user-list">
        {users.map(user => (
          <div
            key={user.id}
            className={`user-item ${user.isUnread ? 'unread' : 'read'}`}
          >
            {user.avatar ? (
              <img
                src={user.avatar}
                alt={user.name}
                className="avatar me-2"
              />
            ) : (
              <div
                className="avatar me-2"
                style={{ backgroundColor: getRandomColor() }}
              >
              </div>
            )}
            <div className="user-details">
              <h6>{user.name}</h6>
              <p>{user.message}</p>
            </div>
            <div className="user-meta ms-auto">
              <span className="timestamp">{user.timestamp}</span>
              {user.unread > 0 && <span className="unread-message">{user.unread}</span>}
              {!user.unread ? <svg xmlns="http://www.w3.org/2000/svg" className="lock-icon" viewBox="0 0 10 10" fill="none"><path d="M8.03078 3.93939H7.57623V2.57573C7.57623 1.15545 6.42075 0 5.00047 0C3.5802 0 2.42472 1.15545 2.42472 2.57573V3.93939H1.97017C1.71914 3.93939 1.51562 4.14291 1.51562 4.39394V9.54545C1.51562 9.79648 1.71914 10 1.97017 10H8.03078C8.28181 10 8.48532 9.79648 8.48532 9.54545V4.39394C8.48532 4.14291 8.28181 3.93939 8.03078 3.93939ZM3.33381 2.57573C3.33381 1.65676 4.08147 0.909091 5.00047 0.909091C5.91947 0.909091 6.66714 1.65676 6.66714 2.57573V3.93939H3.33381V2.57573ZM7.57623 9.09091H2.42472V4.84848H2.87926H7.12169H7.57623V9.09091Z" fill="#434343"/><path d="M5.96618 6.00423C5.78869 5.82671 5.50087 5.82671 5.32336 6.00423L5.00084 6.32675L4.6783 6.00423C4.50081 5.82671 4.213 5.82671 4.03548 6.00423C3.85796 6.18175 3.85796 6.46953 4.03548 6.64705L4.35803 6.96956L4.03551 7.29211C3.858 7.46962 3.858 7.75741 4.03551 7.93493C4.12427 8.02368 4.2406 8.06808 4.3569 8.06808C4.47321 8.06808 4.58957 8.02371 4.6783 7.93493L5.00084 7.61238L5.32339 7.93493C5.41215 8.02368 5.52848 8.06808 5.64478 8.06808C5.76109 8.06808 5.87745 8.02371 5.96618 7.93493C6.14369 7.75741 6.14369 7.46962 5.96618 7.29211L5.64366 6.96956L5.96618 6.64702C6.14372 6.46953 6.14372 6.18171 5.96618 6.00423Z" fill="#434343"/></svg> : ""}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSidebar;
