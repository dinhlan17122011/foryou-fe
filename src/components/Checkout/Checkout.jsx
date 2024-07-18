import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Checkout.css'; // Import file CSS

const Checkout = () => {
  const [selectedCakeitems, setSelectedCakeitems] = useState(null);
  const [selectedCake, setSelectedCake] = useState(null);
  const [selectedCakeaccessories, setSelectedCakeaccessories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null); // Thêm state để lưu lỗi
  const cartId = '668ce44d395ff8c880be15de'; // Đặt ID của giỏ hàng

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch selected cake items and customer info
        const response = await axios.get(`http://localhost:3000/checkout/6698d2e0b05f8ecdede82342`);
        setSelectedCakeitems(response.data.items[0]);
        setSelectedCake(response.data.customer);

        // Fetch accessories
        const responseAccessories = await axios.get('http://localhost:3000/accessory');
        const uniqueCategories = [...new Set(responseAccessories.data.map(item => item.category))];
        setSelectedCakeaccessories(responseAccessories.data);
        setCategories(uniqueCategories);
      } catch (error) {
        setError(error.message); // Lưu thông báo lỗi vào state
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = async (item) => {
    try {
      const { _id, namecake, price, code, size } = item;
      const response = await axios.post('http://localhost:3000/checkout/', {
        cartId,
        productId: _id, // Sử dụng _id thay cho productId
        namecake,
        price,
        code,
        size,
        quantity: 1 // Luôn luôn là 1
      });
      console.log('Added to cart:', response.data.customer.Accessory);
    } catch (error) {
      setError(error.message); // Lưu thông báo lỗi vào state
      console.error('Error adding to cart:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="checkout">
      {selectedCakeitems ? (
        <div className="checkout-item">
          <div className="checkout-item__image">
            <img src='https://www.savor.vn/static/58c9094fe7c4c2edabbb49d597c6be78/8452a/banh-kem-bo-xoai-viet-quat.webp' alt={selectedCakeitems.namecake} />
          </div>
          <div className="checkout-item__details">
            <h2>{selectedCakeitems.namecake}</h2>
            <p>{selectedCakeitems.code}</p>
            <p>Kích thước: {selectedCakeitems.size}</p>
            <input
              type="text"
              placeholder="Nhập chữ viết trên đề tại đây"
              className="checkout-item__input"
            />
          </div>
          <div className="checkout-item__price">
            <span className="price-old">{selectedCakeitems.oldPrice ? `${selectedCakeitems.oldPrice}đ` : ''}</span>
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
                        <p className="product-price">Giá: <span className="">{item.price}</span> đ</p>
                        <button 
                          className="order-button"
                          onClick={() => handleAddToCart(item)}
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
      {error && <p className="error">Error: {error}</p>} {/* Hiển thị thông báo lỗi */}
    </div>
  );
};

export default Checkout;
