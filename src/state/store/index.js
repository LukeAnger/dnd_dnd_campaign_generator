import { createContext, useReducer, useContext } from "react";
import { initialState, draggableReducer } from "../reducers/draggableReducer";

const DraggableContext = createContext();

export const useDraggableStore = () => useContext(DraggableContext);

export const DragProvider = ({ children }) => {
    const [state, dispatch] = useReducer(draggableReducer, initialState);

    return (
        <DraggableContext.Provider value={{ state, dispatch }}>
            {children}
        </DraggableContext.Provider>
    );
};
