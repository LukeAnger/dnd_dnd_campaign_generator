// DragContainer.jsx
import React, { useState, useEffect } from 'react';
import DraggableItem from './DraggableItem';

const initialDraggables = [
  { id: 1, text: 'Drag me!', position: { x: 50, y: 50 } },
  { id: 2, text: 'Drag me too!', position: { x: 150, y: 150 } },
  { id: 3, text: 'Drag me as well!', position: { x: 250, y: 250 } },
];

const DragContainer = () => {
  const [draggables, setDraggables] = useState(initialDraggables);
  const [isDragging, setIsDragging] = useState(false);
  const [draggedItemId, setDraggedItemId] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e, id) => {
    e.preventDefault();
    setIsDragging(true);
    setDraggedItemId(id);
    const item = draggables.find((d) => d.id === id);
    const offsetX = e.clientX - item.position.x;
    const offsetY = e.clientY - item.position.y;
    setDragOffset({ x: offsetX, y: offsetY });
  };

  const handleMouseMove = (e) => {
    if (isDragging && draggedItemId !== null) {
      const newX = e.clientX - dragOffset.x;
      const newY = e.clientY - dragOffset.y;
      setDraggables((prevDraggables) =>
        prevDraggables.map((d) =>
          d.id === draggedItemId
            ? { ...d, position: { x: newX, y: newY } }
            : d
        )
      );
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDraggedItemId(null);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      {draggables.map((draggable) => (
        <DraggableItem
          key={draggable.id}
          id={draggable.id}
          position={draggable.position}
          onMouseDown={handleMouseDown}
        >
          {draggable.text}
        </DraggableItem>
      ))}
    </div>
  );
};

export default DragContainer;
