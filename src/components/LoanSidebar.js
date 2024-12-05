import React from 'react';
import img1 from '../images/1.svg';
import img2 from '../images/2.svg';
import img3 from '../images/3.svg';
import img4 from '../images/4.svg';
import img5 from '../images/5.svg';
import img6 from '../images/6.svg';
import img7 from '../images/7.svg';
const RightSidebar = () => {
  const loanTypes = [
    { id: 1, name: 'Personal', icon: img1 },
    { id: 2, name: 'Micro', icon: img2 },
    { id: 3, name: 'Business', icon: img3 },
    { id: 4, name: 'Vehical', icon: img4 },
    { id: 5, name: 'Travel', icon: img5 },
    { id: 6, name: 'Home', icon: img6 },
    { id: 7, name: 'Property', icon: img7 }
  ];

  const steps = [
    { heading: "Loan type" },
    { heading: "Details" },
    { heading: "Verification" },
    { heading: "Approval" },
    { heading: "Confirmation" },
  ];
  
  const currentStep = 1;  
  return (
    <div className="right-sidebar d-none">
      {/* <div className="progress-steps">
        {steps.map((step, index) => (
          <div key={index} className="step-container">
            <div className={`step ${index + 1 === currentStep ? 'active' : ''}`}>{index + 1}</div>
            <div className={`step-heading ${index + 1 === currentStep ? 'active' : ''}`}>
              {step.heading}
            </div>
          </div>
        ))}
      </div> */}
      <h3 className="mt-4">Select Loan Type</h3>
      <div className="loan-type-grid d-none">
        {loanTypes.map((loan) => (
          <div className="loan-type-card" key={loan.id}>
            <img src={loan.icon} alt={loan.name} className="loan-icon" />
            <p>{loan.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSidebar;
