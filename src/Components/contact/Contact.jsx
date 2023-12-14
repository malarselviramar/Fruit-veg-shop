
import React, { useState } from 'react';


const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <div style={{ marginTop: '60px'}}>
      
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '93vh', paddingTop: '35px' }}>
          <div style={{ width: '100%', maxWidth: '400px', textAlign: 'center', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>

            <h2>Contact Us</h2>

            <form style={{ width: '100%', maxWidth: '300px', margin: '0 auto' }}>
              <div style={{ marginBottom: '15px' }}>
                <input type="text" placeholder="Name" style={inputStyle} />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <input type="email" placeholder="Email" style={inputStyle} />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <textarea placeholder="Feedback from Sara" style={inputStyle}></textarea>
              </div>
              <button type="button" onClick={handleButtonClick} style={buttonStyle}>
                Send
              </button>

              {/* Popup message */}
              {showPopup && (
                <div
                  style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: '#ffffff',
                    padding: '10px',
                    border: '1px solid #dddddd',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    zIndex: 1000,
                  }}
                >
                  Thanks for contacting us!
                  We will get back to you shortly.
                </div>
              )}

            </form>

          </div>
        </div>
      </div>
   
  );
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '5px',
  backgroundColor: '#990000',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
};

export default Contact;
