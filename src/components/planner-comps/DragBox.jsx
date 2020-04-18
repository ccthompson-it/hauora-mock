import React from "react"
import { useDrag, useDrop } from 'react-dnd'

const ItemTypes = {
  TEXT: 'text',
}



function DragDropBox(props) {
  const { text } = props
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ItemTypes.TEXT,
      text
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  })

  return (
    <div className="square">
      <div className="text-container draggable" ref={drag}>
        <p className="middle-text" >{isDragging ? 'Weeee!' : text}</p>
      </div>
    </div>
  )
}

export default DragDropBox