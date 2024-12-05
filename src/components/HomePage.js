import React from 'react';
import LeftSidebar from './LeftSidebar';
import MessageWindow from './MessageWindow';
import LoanSidebar from './LoanSidebar';

const HomePage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3">
          <LeftSidebar />
        </div>
        <div className="col-6">
          <MessageWindow />
        </div>
        <div className="col-3">
          <LoanSidebar />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
