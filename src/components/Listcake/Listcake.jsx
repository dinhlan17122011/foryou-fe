import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios';
const Listcake = () => {
  const [products, setProducts] = useState();
    useEffect(() => {
        const api = async () =>{
            try {
                const res = await axios.get('http://localhost:3000/cake')
                setProducts(res.data)
                console.log(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        api()
    }, []);
  return (
    <div>
        <div> 
            <div className='bencanh'></div>
            <h1 className='tieudelist'>Bánh kem sự kiện</h1>
        </div>
        <div>
          
        </div>
        {/* {products.length > 0 && products.map((item, index) => (
            <div className='divgioithieu'>
                <img className='img' src={item.img} /> 
                <p className='descmainf'>{item.describemainf}</p>
            </div>
    ))} */}
    </div>
  )
}

export default Listcake