import React, { useState, useEffect } from 'react';
import req from '../../axios/index'
import './slider.css'
import axios from 'axios';
import { Button } from 'antd';
const Sliders = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const api = async () =>{
            try {
                const res = await axios.get('http://localhost:3000/slider')
                setProducts(res.data[0])

                console.log(res.data[0]);
            } catch (error) {
                console.log(error);
            }

        }
        api()
    }, []);

    return (
        <div>
        <div className='divslider'>
            <img src={products.nameimg} alt='img' className='nameimg'/>
            <img src={products.img} className='imgcake' />
        </div>
        <div className='divbutton'>
            <button className='button' >ĐẶT BÁNH NGAY</button>
            </div>

        </div>
    );
};

export default Sliders;