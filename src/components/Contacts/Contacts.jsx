import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Contacts.css'; // Import the CSS file

const Contacts = () => {
    const [products, setProducts] = useState({});
    const [productsmainf, setProductsmainf] = useState({});

    useEffect(() => {
        const api = async () => {
            try {
                const res = await axios.get('http://localhost:3000/contact');
                setProducts(res.data[0].information[0]);
            } catch (error) {
                console.log(error);
            }
        };

        const apimainf = async () => {
            try {
                const res = await axios.get('http://localhost:3000/contact');
                setProductsmainf(res.data[0].link[0]);
            } catch (error) {
                console.log(error);
            }
        };

        apimainf();
        api();
    }, []);

    const renderIcon = (key) => {
        switch (key) {
            case 'facbook':
                return <FontAwesomeIcon icon={faFacebook} />;
            case 'tiktok':
                return <FontAwesomeIcon icon={faTiktok} />;
            case 'instagram':
                return <FontAwesomeIcon icon={faInstagram} />;
            default:
                return null;
        }
    };

    return (
        <div className="contacts-container">
            {products && (
                <div className="contact-info">
                    <h2>Contact Information</h2>
                    <p><strong>Consulting Hotline:</strong> {products.consultinghotline}</p>
                    <p><strong>Email:</strong> {products.email}</p>
                    <p><strong>Address:</strong> {products.address}</p>
                </div>
            )}
            {Object.keys(productsmainf).length > 0 && (
                <div className='link-div'>
                    <h2>Liên kết</h2>
                    <div className="links-container">
                        {Object.entries(productsmainf).map(([key, value], index) => (
                            <a key={index} href={value} target="_blank" rel="noopener noreferrer">
                                {renderIcon(key)}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contacts;
