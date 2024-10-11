import React from 'react';

const Attribute = ({attr}) => {
    console.log(attr);
    return (
        <div
            key={attr.text}
            style={{
                margin: '10px 0',
                padding: '8px',
                backgroundColor: attr.color,
                color: 'black',
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: '1.2rem',
                textShadow: '0 0 1px white',
                cursor: 'pointer',
                border: '1px solid black',
            }}
        >
            {attr.text}
        </div>
    )
}

export default Attribute;