import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './giaodien.css'
// import reqs from '../../axios/index'
const Iintroductions = () => {
    const [products, setProducts] = useState([]);
    const [productsmainf, setProductsmainf] = useState([])
    useEffect(() => {
        const api = async () =>{
            try {
                const res = await axios.get('http://localhost:3000/introduction')
                setProducts(res.data[0])
                // console.log(res.data[0]);
            } catch (error) {
                console.log(error);
            }

        }
        const apimainf = async () =>{
            try {
                const res = await axios.get('http://localhost:3000/introduction')
                setProductsmainf(res.data[0].introductionmainf || [])
                // console.log('mainf :',res.data[0].introductionmainf || []);
                // console.log('mainf1 :',res.data[0].introductionmainf[0]);
                // console.log('mainf2 :',res.data[0].introductionmainf[1]);
                // console.log('mainf3 :',res.data[0].introductionmainf[2]);
                // console.log('mainf4 :',res.data[0].introductionmainf[3]);
            } catch (error) {
                console.log(error);
            }

        }
        apimainf()
        api()
    }, []);
  return (
    <div>
        <div className='tieude' >
        <h1 className='text'>{products.name}</h1>
        <p className='mota'>{products.describe}</p>
        </div>
        {productsmainf.length > 0 && productsmainf.map((item, index) => (
            <div className='divgioithieu'>
                <img className='img' src={item.img} /> 
                <p className='descmainf'>{item.describemainf}</p>
            </div>
    ))}
    </div>
  )
}

export default Iintroductions