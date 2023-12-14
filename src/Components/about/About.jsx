import React from 'react';




export function About() {
  const headingStyle = {
    backgroundColor: 'black',
    color: 'maroon',
  };

  

  return (
    <div>
      <h1 className='mt-5 pt-5 d-flex align-items-center justify-content-center' style={headingStyle}>About Us</h1>
      <div className='d-flex flex-column'>
        <h2 className='mt-5 pt-5 mb-5 d-flex align-items-center justify-content-center display-6 lead'>BurgerShop</h2>
        <div className='mb-5 text-center lead'>
        <p>
          This is the Fruit Shop. The place for
          <br></br>
           more fresh fruits on the entire <br></br>earth.
        </p>
        <p>
          Explore the various types of fruits <br></br>and vegetables. 
          
        </p>
        </div>
       
      </div>
    </div>
  );
}

export default About;
