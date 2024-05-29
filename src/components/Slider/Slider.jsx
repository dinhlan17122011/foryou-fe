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
                const res = await req.get('/slider')
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
            <img src={products.imgname} alt='img' className='nameimg'/>
            <Button className='button' >ĐẶT BÁNH NGAY</Button>
            <img src={products.imgcake} className='imgcake' />
        </div>
    );
};

export default Sliders;