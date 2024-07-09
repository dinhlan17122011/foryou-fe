import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Checkout.css'; // Import file CSS

const Checkout = () => {
    const [selectedCakeitems, setSelectedCakeitems] = useState(null);
    const [selectedCake, setSelectedCake] = useState({});
    const [selectedCakeaccessories, setSelectedCakeaccessories] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchSelectedCakeitems = async () => {
            try {
                const response = await axios.get('http://localhost:3000/checkout/668ce44d395ff8c880be15de');
                setSelectedCakeitems(response.data.items[0]);
                console.log(response.data.items[0]);
            } catch (error) {
                console.error('Error fetching selected cake:', error);
            }
        };

        const fetchSelectedCake = async () => {
            try {
                const response = await axios.get('http://localhost:3000/checkout/668ce44d395ff8c880be15de');
                setSelectedCake(response.data.customer);
                console.log(response.data.customer);
            } catch (error) {
                console.error('Error fetching selected cake:', error);
            }
        };

        const accessoriesCake = async () => {
            try {
                const response = await axios.get('http://localhost:3000/accessory');
                const uniqueCategories = [...new Set(response.data.map(item => item.category))];
                setSelectedCakeaccessories(response.data);
                console.log(uniqueCategories);
                setCategories(uniqueCategories);
            } catch (error) {
                console.error('Error fetching accessories:', error);
            }
        };

        accessoriesCake();
        fetchSelectedCakeitems();
        fetchSelectedCake();
    }, []);

    const handleAddToCart = async (productId) => {
        try {
            const response = await axios.post('http://localhost:3000/668ce44d395ff8c880be15de', {
                productId,
                quantity: 1
            });
            console.log('Cart updated:', response.data.item[0]);
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    };

    return (
        <div className="checkout">
            {selectedCakeitems ? (
                <div className="checkout-item">
                    <div className="checkout-item__image">
                        <img src='https://www.savor.vn/static/58c9094fe7c4c2edabbb49d597c6be78/8452a/banh-kem-bo-xoai-viet-quat.webp' alt={selectedCakeitems.name} />
                    </div>
                    <div className="checkout-item__details">
                        <h2>{selectedCakeitems.name}</h2>
                        <p>{selectedCakeitems.code}</p>
                        <p>Kích thước: {selectedCakeitems.size}</p>
                        <input
                            type="text"
                            placeholder="Nhập chữ viết trên đề tại đây"
                            className="checkout-item__input"
                        />
                    </div>
                    <div className="checkout-item__price">
                        <span className="price-old">{selectedCakeitems.oldPrice}đ</span>
                        <span className="price-new">{selectedCakeitems.price}đ</span>
                    </div>
                    <div className="checkout-item__quantity">
                        <input
                            type="number"
                            value="1"
                            readOnly
                            className="checkout-item__quantity-input"
                        />
                    </div>
                    <button className="checkout-item__delete">🗑️</button>

                    <div className="accessories">
                        <h2>Chọn thêm phụ kiện</h2>
                        <p>Mỗi bánh sinh nhật khi mua được tặng kèm 1 bộ dao, dĩa, đĩa cho 10 người ăn.</p>
                        <p>- Với mẫu bánh mousse cốc và panna cotta chỉ tặng kèm dĩa/thìa ạ.</p>
                        <p>Quý khách lưu ý: bánh chưa kèm sẵn mũ và nến ạ</p>
                        {categories.map((category, index) => (
                            <div key={index}>
                                <h1 className='text'>{category}</h1>
                                <div className="product-list">
                                    {selectedCakeaccessories.filter(product => product.category === category).map((item, index) => (
                                        <div key={index} className="product-card">
                                            <img className="product-img" src={item.img} alt={item.name} />
                                            <div className="product-info">
                                                <h3 className="product-title">{item.name}</h3>
                                                <p className="product-description">{item.description}</p>
                                                <p className="product-price">Giá: <span className="">{item.number}</span> đ</p>
                                                <button 
                                                    className="order-button"
                                                    onClick={() => handleAddToCart(item.productId)}
                                                >
                                                    Thêm vào giỏ
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <p>Đang tải thông tin bánh...</p>
            )}
        </div>
    );
};

export default Checkout;
