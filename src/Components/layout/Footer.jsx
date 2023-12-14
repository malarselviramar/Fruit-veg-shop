import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
    const italicStyle = {
        fontStyle: 'italic',
      };
      return(    
<footer>
            
            <h3>Fruit Shop</h3>
            {/* <p>Follow us</p> */}
            <button
        type="button"
        className="btn mx-2 rounded-circle"
        style={{ backgroundColor: '$dark;', color: '#fff' }}
      >
        <i className="fab fa-youtube"></i>
      </button>
        <p>we are trying to give you the best product possible</p>
      <button
        type="button"
        className="btn mx-2"
        style={{ backgroundColor: '$dark;', color: '#fff' }}
      >
        <i className="fab fa-instagram"></i>
      </button>
           <p><span style={italicStyle}>we give attention to genuine to feedback.</span>
            <span className='fw-bold' style={{ marginLeft: '10px' }}>All right received @fruitvegshop</span></p>
            <button
        type="button"
        className="btn mx-2"
        style={{ backgroundColor: '$dark;', color: '#fff' }}
      >
        <i className="fab fa-github"></i>
      </button>
          </footer>
      )
}

export default Footer;
