export const ADD_DRAGGABLE = "ADD_DRAGGABLE";
export const REMOVE_DRAGGABLE = "REMOVE_DRAGGABLE";
export const MOVE_DRAGGABLE = "MOVE_DRAGGABLE";

export const addDraggableAction = (attribute) => ({
    type: ADD_DRAGGABLE,
    payload: attribute,
});

export const removeDraggableAction = (id) => ({
    type: REMOVE_DRAGGABLE,
    payload: id,
});

export const moveDraggableAction = (id, position) => ({
    type: MOVE_DRAGGABLE,
    payload: { id, position },
});
