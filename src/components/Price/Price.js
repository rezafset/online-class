import React from 'react';
const Price = (props) => {
    const priceInfo = props.price;

    const total = priceInfo.reduce((total , crc)=> total + Number(crc.price) ,0)
    const grandTotal = total.toFixed(2);

    return (
        <div>
            <h3>Total Enroll: {priceInfo.length} </h3>
            <p>Total Price: {grandTotal} </p>
        </div>
    );
};

export default Price;