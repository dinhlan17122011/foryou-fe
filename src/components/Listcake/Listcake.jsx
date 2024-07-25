import React, { useEffect, useState } from 'react';
import './List.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Listcake = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:3000/cake');
        setProducts(res.data);
        // Extract categories
        const uniqueCategories = [...new Set(res.data.map(product => product.catogory))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {categories.map((category, index) => (
        <div key={index}>
          <h1 className='text'>{category}</h1>
          <div className="product-list">
            {products.filter(product => product.catogory === category).map((item, index) => (
              <div key={index} className="product-card">
                <Link to={`/product/${item._id}`}>
                  <img className="product-img" src={item.img} alt={item.name} />
                  <div className="product-info">
                    <h3 className="product-title">{item.name}</h3>
                  </div>
                </Link>
                <p className="product-description">{item.description}</p>
                    <p className="product-price">Giá: <span className="old-price">{item.number}</span> đ</p>
                    <p>id:{item._id}</p>
                    <p>{item.catogory}</p>
                    <p className="product-size">Kích thước: {item.size}</p>
                    <button className="order-button">Đặt ngay</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Listcake;
