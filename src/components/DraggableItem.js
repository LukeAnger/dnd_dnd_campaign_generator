import React from 'react';

const DraggableItem = ({ draggable, onMouseDown, children }) => {
    const { id, position, color } = draggable;
    return (
        <div
            style={{
            position: 'absolute',
            left: `${position.x}px`,
            top: `${position.y}px`,
            width: '200px',
            height: '200px',
            backgroundColor: color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid black',
            userSelect: 'none',
            cursor: 'grab',
            }}
            onMouseDown={(e) => onMouseDown(e, id)}
        >
            {children}
        </div>
    );
};

export default DraggableItem;
