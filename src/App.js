import { useState, useEffect, useRef } from "react"

import DragContainer from "./components/DragContainer"
import AttributeMenu from "./components/AttributeMenu"

const App = () => {

    const dragContainerRef = useRef(null)

    const handleAddAttribute = (attribute) => {
        console.log(dragContainerRef, attribute)
        if (dragContainerRef.current) {
            dragContainerRef.current.addAttribute(attribute)
        }
    }


    return (
        <div>
        <h1>React 18 Alpha</h1>
        <AttributeMenu onAddAttribute={handleAddAttribute} />
        <DragContainer ref={dragContainerRef} />
        </div>
    )
}

export default App