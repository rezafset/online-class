import React from 'react';

const Price = (props) => {
    const priceInfo = props.price;

    const total = priceInfo.reduce((total , crc)=> total + Number(crc.price) ,0)

    return (
        <div>
            <h3>Total Enroll: {priceInfo.length} </h3>
            <p>Total Price: {total} </p>
        </div>
    );
};

export default Price;