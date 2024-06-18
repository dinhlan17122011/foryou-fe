import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Policies = () => {
    const [products, setProducts] = useState([]);
    const [productsimg, setProductsimg] = useState([]);
    useEffect(() => {
        const fetchDataimg = async () => {
          try {
            const res = await axios.get('http://localhost:3000/policy');
            if (Array.isArray(res.data)) {
              setProductsimg(res.data[0]);
              console.log(res.data[0].img[0]);
            } else {
              console.error('API response is not an array:', res.data);
              setProductsimg([]);
            }
          } catch (error) {
            console.error('Error fetching data:', error);
            setProductsimg([]);
          }
        };
        
    
        fetchDataimg();
      }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:3000/policy');
        if (Array.isArray(res.data)) {
          setProducts(res.data[0]);
          console.log(res.data[0]);
        } else {
          console.error('API response is not an array:', res.data);
          setProducts([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setProducts([]);
      }
    };
    

    fetchData();
  }, []);
  

  return (
    <div>
      {Array.isArray(products) && products.length > 0 ? (
        products.map((product, index) => (
          <div key={index}>
            <p>{product.title}</p>
            {Array.isArray(productsimg) ? (
              product.img.map((image, imgIndex) => (
                <img key={imgIndex} src={Object.values(image)[0]} alt={`Policy image ${imgIndex + 1}`} />
              ))
            ) : (
              <p>No images available</p>
            )}
          </div>
        ))
      ) : (
        <div>Loading or no products available</div>
      )}
    </div>
  );
};

export default Policies;
