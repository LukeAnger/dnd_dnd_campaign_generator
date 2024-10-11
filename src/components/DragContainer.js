import React, { useState, useEffect } from 'react';
import { useDraggableStore } from '../state/store';
import { moveDraggableAction } from '../state/actions/draggableActions';
import DraggableItem from './DraggableItem';

const DragContainer = () => {
    const { state, dispatch } = useDraggableStore();
    const [isDragging, setIsDragging] = useState(false);
    const [draggedItemId, setDraggedItemId] = useState(null);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e, id) => {
        e.preventDefault();
        setIsDragging(true);
        setDraggedItemId(id);
        const item = state.draggables.find((d) => d.id === id);
        const offsetX = e.clientX - item.position.x;
        const offsetY = e.clientY - item.position.y;
        setDragOffset({ x: offsetX, y: offsetY });
    };

    const handleMouseMove = (e) => {
        if (isDragging && draggedItemId !== null) {
            const newX = e.clientX - dragOffset.x;
            const newY = e.clientY - dragOffset.y;
            dispatch(moveDraggableAction(draggedItemId, { x: newX, y: newY }));
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
        <div style={{ width: '80vw', height: '100vh', position: 'relative', marginLeft: '200px' }}>
            {state.draggables.map((draggable) => (
                <DraggableItem
                    key={draggable.id}
                    draggable={draggable}
                    onMouseDown={handleMouseDown}
                >
                    {draggable.text}
                </DraggableItem>
            ))}
        </div>
    );
};

export default DragContainer;
