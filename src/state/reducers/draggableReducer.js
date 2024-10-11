import { ADD_DRAGGABLE, REMOVE_DRAGGABLE, MOVE_DRAGGABLE } from "../actions/draggableActions";

const initialState = {
    draggables: [],
};

const draggableReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DRAGGABLE:
            const newId = `${action.payload.id}-${Date.now()}`;
            const newDraggable = {
                id: newId,
                text: action.payload.text,
                color: action.payload.color,
                position: { x: 50, y: 50 }, // Initial position for new items
            };
            return {
                ...state,
                draggables: [...state.draggables, newDraggable],
            };
        case REMOVE_DRAGGABLE:
            return {
                ...state,
                draggables: state.draggables.filter((d) => d.id !== action.payload),
            };
        case MOVE_DRAGGABLE:
            return {
                ...state,
                draggables: state.draggables.map((d) =>
                    d.id === action.payload.id
                        ? { ...d, position: action.payload.position }
                        : d
                ),
            };
        default:
            return state;
    }
};

export { initialState, draggableReducer };
