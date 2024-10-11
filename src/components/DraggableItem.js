import React from 'react';

const DraggableItem = ({ id, position, onMouseDown, children }) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: '200px',
        height: '200px',
        backgroundColor: 'lightcoral',
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
