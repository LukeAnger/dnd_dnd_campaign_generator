import React from 'react';
import { useDraggableStore } from '../state/store';
import { addDraggableAction } from '../state/actions/draggableActions';

import Attribute from './Attribute';

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
                <Attribute key={attr.text} attr={attr} onClick={() => handleAddAttribute(attr)} />
            ))}
        </div>
    );
};

export default AttributeMenu;
