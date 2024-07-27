import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Checkout.css'; // Import file CSS
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { useParams } from 'react-router';
var MockAdapter = require("axios-mock-adapter");

// This sets the mock adapter on the default instance
const Checkout = () => {
  const { idlay } = useParams();
  const [selectedCakeitems, setSelectedCakeitems] = useState([]);
  const [selectedCake, setSelectedCake] = useState([]);
  const [selectedCakeaccessories, setSelectedCakeaccessories] = useState([]);
  const [selectedCakeaccessoriesdata, setSelectedCakeaccessoriesdata] = useState([]);
  const [categories, setCategories] = useState([]);
  const  [accessory,setaccessory]=useState([])
  const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedWard, setSelectedWard] = useState('');
  const [error, setError] = useState([]); // Thêm state để lưu lỗi
  const cartId = '66a1aa0b1e743edda7f6eb32'; // Đặt ID của giỏ hàng
  const [startDate, setStartDate] = useState(new Date());
  const  [date,setdate]=useState([])
  const [total, setTotal] = useState(0);
  const [totalAccessories, setTotalAccessories] = useState(0);
  const [totalOrder, setTotalOrder] = useState(0);
  const [id, setid] = useState([]);
  const orderId = '66a1aa0b1e743edda7f6eb32'
  const [customer, setCustomer] = useState({
    orderer: [{ name: '', phone: '' }],
    ordererSchemarecipient: [{ recipientName: '', recipientPhone: '' }],
    deliveryaddress: [{ address: '', district: '', ward: '' }],
    bill: false,
    note: '',
    deliverytime: [{ time: '', date: '' }],
  });
  const fakedata = {
    Noirala:'ERR'
  }
  const mock = new MockAdapter(axios);



  const ship =30000;
  useEffect(() => {
    calculateTotal();
  }, [selectedCakeitems, accessory]);

  const calculateTotal = () => {
    // B1: Tính tổng tiền phụ kiện ✅
    const totalAcc = accessory.reduce((acc, item) => {
      if (item && item.number && item.quantity) {
        return acc + item.number * item.quantity;
      }
      return acc;
    }, 0);
    setTotalAccessories(totalAcc);
    console.log(totalAcc);

    // B2: Tính tổng tiền = tiền Bánh + tiền tổng phụ kiện ✅
    const cakePrice = selectedCakeitems?.price || 0; 
    const totalItems = (Number(cakePrice)) + (Number(totalAcc));
    setTotal(totalItems);
    console.log(totalItems);
    
    // B3: Tính tổng đơn = tổng tiền + tiền ship ✅
    const totalOrderAmount = totalItems + ship;
    setTotalOrder(totalOrderAmount);
    console.log(totalOrderAmount);
  };
  const datevale=[
    "10h-11h",
    "11h-12h",
    "12h-13h",
    "13h-14h",
    "14h-15h",
    "15h-16h",
    "16h-17h",
    "17h-18h",
    "18h-19h",
    "19h-20h",
"20h-21h",
]
const districts = [
    'Đống Đa',
    'Thanh Xuân',
    'Hà Đông'
];


const wardsByDistrict = {
    'Đống Đa': ["Văn Miếu", "Văn Chương", "Trung Tự", "Trung Phụng", "Trung Liệt", "Thổ Quan", "Thịnh Quang", "Quốc Tử Giám"," Quang Trung", "Phương Mai", "Phương Liên", "Ô Chợ Dừa", "Ngã Tư Sở", "Nam Đồng"," Láng Thượng"," Láng Hạ", "Kim Liên", "Khương Thượng", "Khâm Thiên", "Hàng Bột", "Cát Linh"],
'Thanh Xuân': ["Hạ Đình"," Khương Đình", "Khương Mai", "Khương Trung", "Kim Giang", "Nhân Chính", "Phương Liệt", "Thanh Xuân Bắc", "Thanh Xuân Nam", "Thanh Xuân Trung", "Thượng Đình."],
'Hà Đông': ["Biên Giang", "Đồng Mai", "Yên Nghĩa", "Dương Nội"," Hà Cầu", "La Khê", "Mộ Lao"," Nguyễn Trãi", "Phú La", "Phú Lãm", "Phú Lương", "Kiến Hưng", "Phúc La", "Quang Trung", "Vạn Phúc", "Văn Quán", "Yết Kiêu"]
};

const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
    setSelectedWard(''); // Reset selected ward when district changes
};

const handleWardChange = (event) => {
    setSelectedWard(event.target.value);
};

const wards = selectedDistrict ? wardsByDistrict[selectedDistrict] : [];
console.log(wards);
const handleChange = (event) => {
setSelectedDistrict(event.target.value);
};
const handleDateChange = (date) => {
    setStartDate(date);
  };
const handledatenow=(event) =>{
const datenow = event.target.value;
setdate(datenow);
}
// mock.onGet('http://localhost:3000/checkout/66a1aa0b1e743edda7f6eb32').reply(200, fakedata)
useEffect(() => {
  const Axiosdata = async () => {
    try {
      // const response = await axios.get('http://localhost:3000/checkout/66a1aa0b1e743edda7f6eb32', {
      //   validateStatus: (so)=>{
      //     if ( so < 500)
      //       console.log('ERR :',so);
      //   }
      // });
      const response = await axios.get(`http://localhost:3000/checkout/66a1aa0b1e743edda7f6eb32`);
      // setSelectedCake(response.data.items);
      // setSelectedCakeitems(response.data.items[0]);
      // setaccessory(response.data.Accessory);
      console.log(response.data);

      // const responseAccessories = await axios.get('http://localhost:3000/accessory');
      // const uniqueCategories = [...new Set(responseAccessories.data.map(item => item.category))];
      // setSelectedCakeaccessories(responseAccessories.data);
      // setCategories(uniqueCategories);
      // console.log(responseAccessories.data);

      // const responseCustomer = await axios.get('http://localhost:3000/checkout/66a1aa0b1e743edda7f6eb32');
      // setCustomer(responseCustomer.data.customer || {
      //   orderer: [{ name: '', phone: '' }],
      //   deliveryaddress: [{ address: '', district: '', ward: '' }],
      //   ordererSchemarecipient: [{ recipientName: '', recipientPhone: '' }],
      //   bill: '',
      //   note: '',
      //   deliverytime: [{ time: '', date: '' }],
      // });
      // console.log(responseCustomer.data.customer);

    } catch (error) {
      setError(error.message);
      console.log(error.toJSON());
      console.error('Error fetching data:', error);
    }
  };

  Axiosdata();
}, []);
  const handleChangee = (e, field, index) => {
    const { name, value } = e.target;
    const updatedCustomer = { ...customer };

    if (Array.isArray(updatedCustomer[field])) {
      updatedCustomer[field][index][name] = value;
    } else {
      updatedCustomer[field] = value;
    }
    
    setCustomer(updatedCustomer);
  };
  
  console.log(customer);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3000/checkout/66a1aa0b1e743edda7f6eb32`, { customer });
      console.log(response.data.customer);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddToCart = async (item) => {
    try {
      const { _id, name, number } = item; // Thêm 'price'
      const quantity = 1; // Đảm bảo thêm quantity với giá trị mặc định là 1
  
      const response = await axios.post('http://localhost:3000/checkout/66a1aa0b1e743edda7f6eb32', {
        cartId,
        name,
        number, // Thêm price
        quantity // Thêm quantity
      });
  
      // Cập nhật state với phụ kiện mới được thêm
      setSelectedCakeaccessoriesdata([...selectedCakeaccessoriesdata, response.data.Accessory]);
      console.log('Added to cart:', response.data.Accessory);
    } catch (error) {
      setError(error.message);
      console.error('Error adding to cart:', error.response ? error.response.data : error.message);
    }
  };
  console.log(accessory);
  
  
  

  return (
    <div>
    <div className="checkout">
      <h1>Giỏ hàng</h1>
      <p>Bạn có 1 sản phẩm trong giỏ hàng</p>
      {selectedCakeitems ? (
        <div className="checkout-item">
          <div className="checkout-item__image">
            <img src='https://www.savor.vn/static/e3579028d84021e8443532247c7d3bfd/491dc/banh-kem-bo-xoai-viet-quat.webp' className='imghcheckout' alt={selectedCakeitems.namecake} />
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
                        <p className="product-price">Giá: <span className="">{item.number}</span> đ</p>
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
    <div className='container'>
    <div className='div-left'>
        <h1>Xác nhận đơn hàng</h1>
        <div></div>
        {/* <form onSubmit={handleSubmit}>
        {Array.isArray(customer.orderer) && customer.orderer.length > 0 ? (
        customer.orderer.map((orderer, index) => (
          <div key={index}>
             <h2>Thông tin người đặt</h2>
            <input
              placeholder="Họ và tên"
              type="text"
              name="name"
              value={orderer.name || ''}
              onChange={(e) => handleChangee(e, 'orderer', index)}
            />
            <div></div>
            <input
              placeholder="Số điện thoại"
              type="text"
              name="phone"
              value={orderer.phone || ''}
              onChange={(e) => handleChangee(e, 'orderer', index)}
            />
          </div>
        ))
      ) : (
        <p>LỖI</p>
      )}

        </form> */}

        <h2>Thông tin người đặt</h2>
        <input
        placeholder="Họ và tên"
        value={customer.orderer[0].name}
        onChange={(e) => handleChangee(e, 'orderer', 0)}
        />
        <div></div>
        <input
        placeholder="Số điện thoại"
        value={customer.orderer[0].phone}
        onChange={(e) => handleChangee(e, 'orderer', 0)}
        />

        <h2>Thông tin người nhận</h2>
        <input
        placeholder="Họ và tên"
        
        />
        <div></div>
        <input
        placeholder="Số điện thoại"
        
        />
        <h2>Địa chỉ nhận hàng</h2>  
        <label htmlFor="districts" className="dropdown-label">Chọn Quận:</label>
            <select id="districts" className="dropdown-select" value={selectedDistrict} onChange={handleDistrictChange}>
                <option value="">--Chọn Quận--</option>
                {districts.map((district, index) => (
                    <option key={index} value={district}>
                        {district}
                    </option>
                ))}
            </select>
            

                
                    <label htmlFor="wards" className="dropdown-label">Chọn Phường:</label>
                    <select id="wards" className="dropdown-select" value={selectedWard} onChange={handleWardChange}>
                        <option value="">--Chọn Phường--</option>
                        {wards.map((ward, index) => (
                            <option key={index} value={ward}>
                                {ward}
                            </option>
                        ))}
                    </select>
                

            <div></div>

          <input
          className='inputclass'
          placeholder="Số nhà , dường cụ thể"
          
          />
        <h2>Hóa đơn</h2>
        <div className='checkbox-row'>
        <input type="checkbox" id="myCheckbox"/>
        <p>Có lấy hóa đơn</p>
        </div>
        <h2>Ghi chú khác cho đơn hàng</h2>
        <p>KHÔNG ghi chữ viết bánh tại đây.</p>
        <p>Nếu muốn ghi chữ, vui lòng quay lại trang GIỎ HÀNG liền trước ạ</p>
        <textarea class="resizable-textarea" placeholder="Ghi chú khác chừ viết"></textarea>
        <h2>Thời gian nhận hàng</h2>
        <div>
        <label htmlFor="date-picker" style={{ fontWeight: 'bold', marginRight: '10px' }}>Chọn ngày:</label>
            <DatePicker
                id="date-picker"
                selected={startDate}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
                className="custom-datepicker"
            />
            <div />
          <label htmlFor="districts" className="dropdown-label">Thời gian:</label>
            <select id="districts" className="dropdown-select" value1={date} onChange2={handledatenow}>
                {datevale.map((date, index) => (
                    <option key={index} value={date}>
                        {date}
                    </option>
                ))}
            </select>
            {/* <button className="order-button" type="submit" onClick={handleSubmit}>Đặt hàng</button> */}

            {/* <button className="order-button" type="submit">Đặt hàng</button> */}
        </div>
      </div>
      {/* Thông tin  */}
      <div className='div-right'>
      <div className='scrollable-container'>
        <div>
          <h1>Thông tin đơn hàng</h1>
          {selectedCakeitems ? (
            <div className="checkout-item-conclude">
              <div className='div-container '>
                <div class="left">
                <img src='https://www.savor.vn/static/e3579028d84021e8443532247c7d3bfd/491dc/banh-kem-bo-xoai-viet-quat.webp' className='imghcheckout-container' alt={selectedCakeitems.namecake} />
                </div>
                <div class="middle">
                <div className="checkout-item-conclude-details">
                <h2 className='namecake-checkout'>{selectedCakeitems.namecake}</h2>
                <p className='size-checkout'>Kích thước:{selectedCakeitems.size}</p>
                <p className='soluong-checkout'>SL :1 </p>
                </div>
                </div>
                <div class="right">
                <span className="price-new">{selectedCakeitems.price}đ</span>
                </div>
            </div>
            </div>
          ) : (
            <p>Đang tải thông tin bánh...</p>)}
        </div>
        <h3>Phần phụ kiện</h3>
        <div className="product-list">
            {Array.isArray(accessory) && accessory.length > 0 ? (
                accessory.map((product,index) => (
                    <div key={index} className="product-item">
                      <img />
                        <h3>{product.name}</h3>
                        <p>Giá: {product.number} VND</p>
                        <p>SL: {product.quantity}</p>
                    </div>
                ))
            ) : (
                <p>No products available.</p>
            )}
        </div>
      </div>
          <div>
            <h2>Tổng tiền phụ kiện:{totalAccessories}VNĐ</h2>
            <h2>Phí ship:{ship} VNĐ</h2>
            <h2>Tổng đơn:{totalOrder} VNĐ</h2>
          </div>
          <div>
          <h1>CHÚ Ý</h1>
          <p>Chính sách ship với sản phẩm Bánh sinh nhật:</p>
          <h3>1/ Ship 12 quận nội thành:</h3>
          <p>+ Đơn dưới 300k: Thu ship đồng giá 30k</p>
          <p>+ Đơn từ 300k: Miễn ship, tối đa 60k</p>
          <h3>2/ Nhận tại cửa hàng:</h3>
          <p>+ Miễn ship toàn bộ với đơn nhận tại cơ sở ở Dương Nội (Hà Đông) </p>
          <p>Các cơ sở khác:</p>
          <p>- Đơn từ 300k hoặc đặt trước 24h: Miễn ship, tối đa 60k</p>
          <p>-Còn lại: Thu ship đồng giá 30k</p>
          <p>Với các đơn thuộc nhóm miễn ship, nếu phí ship thực tế phát sinh cao hơn mức hỗ trợ tối đa đã nêu là 60k, Savor xin phép thu phần chênh lệch ạ (ví dụ 70k - 60k = 10k).</p>
        </div>
        <button className="order-button" type="submit">Đặt hàng</button>
      </div>
    </div>
    </div>
  );
};

export default Checkout;