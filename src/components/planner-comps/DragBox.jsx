import React from "react"
import { useDrag } from 'react-dnd'

const ItemTypes = {
  TEXT: 'text',
}



function DragBox(props) {
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
    <div className="text-container draggable" ref={drag}>
      <p className="middle-text" >{isDragging ? 'Weeee!' : text}</p>
    </div>
  )
}

export default DragBox