import React from 'react';
import { useDraggableStore } from '../state/store';
import { addDraggableAction } from '../state/actions/draggableActions';

const attributes = [
    { id: 'timeOfDay', text: 'Time of Day', color:'#C16C3E' },
    { id: 'weather', text: 'Weather', color:'#3E93C1' },
    { id: 'terrain', text: 'Desert', color:'#45BA98' },
    { id: 'terrain', text: 'Lush', color:'#BA4567' },
];

const AttributeMenu = () => {
    const { dispatch } = useDraggableStore();

    const handleAddAttribute = (attr) => {
        dispatch(addDraggableAction(attr));
    };

    return (
        <div style={{ padding: '10px', borderRight: '1px solid black', width: '200px' }}>
            <h3>Attributes Menu</h3>
            {attributes.map((attr) => (
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
                    onClick={() => handleAddAttribute(attr)}
                >
                    {attr.text}
                </div>
            ))}
        </div>
    );
};

export default AttributeMenu;
