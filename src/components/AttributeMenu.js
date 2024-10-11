import React from 'react';
import { useDraggableStore } from '../state/store';
import { addDraggableAction } from '../state/actions/draggableActions';

const attributes = [
    { id: 'timeOfDay', text: 'Time of Day' },
    { id: 'weather', text: 'Weather' },
    { id: 'terrain', text: 'Desert' },
    { id: 'terrain', text: 'Lush' },
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
                        backgroundColor: 'lightgray',
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
