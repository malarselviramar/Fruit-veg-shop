import React, { useState } from 'react';
import AppleImage from '../../Assets/red-apple-basket.jpg';
import PomgrImage from '../../Assets/beetroot-white-wooden-table.jpg';
import BroccoliImage from '../../Assets/fresh-carrot-with-green-leaves.jpg';
import { Card } from 'react-bootstrap';

const Products = () => {
  const fruit = [
    {
      id: 1,
      name: 'Apple',
      image: AppleImage,
      price: '$9.99',
    },
    {
      id: 2,
      name: 'Beetroot',
      image: PomgrImage,
      price: '$10.99',
    },
    {
      id: 3,
      name: 'Carrot',
      image: BroccoliImage,
      price: '$10.99',
    },
  ];

  const [selectedFruit, setSelectedFruit] = useState(null);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });

  const handleBuyNowClick = (fruit, event) => {
    setSelectedFruit(fruit);
    setPopupPosition({
      top: event.clientY + window.scrollY,
      left: event.clientX + window.scrollX,
    });
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ paddingTop: '90px' }}>Our Products</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          alignItems: 'stretch',
        }}
      >
        {fruit.map((fruitItem) => (
          <Card
            key={fruitItem.id}
            style={{
              textAlign: 'center',
              margin: '10px',
              maxWidth: '300px',
            }}
          >
            <Card.Img
              src={fruitItem.image}
              alt={fruitItem.name}
              style={{
                maxWidth: '100%',
                height: '150px',
                objectFit: 'cover',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
              onClick={(e) => handleBuyNowClick(fruitItem, e)}
            />
            <Card.Body>
              <h3>{fruitItem.name}</h3>
              <p>{fruitItem.price}</p>
              <button
                onClick={(e) => handleBuyNowClick(fruitItem, e)}
                style={{
                  backgroundColor: 'maroon',
                  color: 'white',
                  padding: '8px 16px',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Buy Now
              </button>
            </Card.Body>
          </Card>
        ))}
      </div>

      {selectedFruit && isPopupVisible && (
        <div
          style={{
            position: 'absolute',
            top: popupPosition.top - 100,
            left: popupPosition.left - 150,
            padding: '20px',
            backgroundColor: 'white',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
          }}
        >
          <p>{`Item added to cart: ${selectedFruit.name}`}</p>
          <button onClick={handleClosePopup}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Products;
