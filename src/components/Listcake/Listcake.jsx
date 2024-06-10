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
        1
    </div>
  )
}

export default Listcake