import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './policies.css';

const Policies = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:3000/policy');
                setProducts(res.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setProducts([]);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="policies-container">
          <h1 className='text-policy'>Chính sách ship & bán hàng</h1>
          <div className='duoi'></div>
            {Array.isArray(products) && products.length > 0 ? (
                products.map((product, index) => (
                    <div key={index} className="policy">
                        <p className="policy-title">{product.title}</p>
                        {Array.isArray(product.img) && product.img.length > 0 ? (
                            <div className="policy-images">
                                {product.img.map((img, imgIndex) => (
                                    <img key={imgIndex} src={img} alt={`Policy image ${imgIndex + 1}`} className="policy-image" />
                                ))}
                            </div>
                        ) : (
                            <p className="no-images">No images available</p>
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
