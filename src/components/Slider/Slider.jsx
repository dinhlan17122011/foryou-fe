import React, { useState, useEffect } from 'react';
import './slider.css'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css';
import axios from 'axios';
const Sliders = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const api = async () =>{
            try {
                const res = await axios.get('http://localhost:3000/slider')
                setProducts(res.data[0] || [])
                // console.log(res.data[0]);
            } catch (error) {
                console.log(error);
            }

        }
        api()
    }, []);
    const images = [
        "https://gcs.tripi.vn/public-tripi/tripi-feed/img/474070Vkl/anh-background-thien-nhien-dep_033353803.jpg",
        "https://gcs.tripi.vn/public-tripi/tripi-feed/img/474070aSN/anh-background-thien-nhien-cho-photoshop_033353771.jpg",
        "https://gcs.tripi.vn/public-tripi/tripi-feed/img/474070alp/background-canh-thien-nhien-dep_033353928.jpg",
    ];

    return (
        <div>
            {/* {products.length > 0 && products.map((item,index) => (
                <div className='divslider' key={index}>
                    <img className='nameimg' src={item.nameimg} alt='1' /> 
                    <img className='img' src={item.img} alt='2'/> 
                </div>
                 ))}
            <div className='divbutton'>
                <button className='button' >ĐẶT BÁNH NGAY</button>
            </div>  */}
             <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    {/* <span>Slide 1</span> */}
                    <img src={products.nameimg} alt="" className='imgname1' />
                    <img src={products.img} alt="" className='img1' />
                    <button className='button' >ĐẶT BÁNH NGAY</button>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    <span>Slide 2 (nome)</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    <span>Slide 3 (nome)</span>
                </div>
            </div>
        </Slide>
        </div>
    );
};

export default Sliders;