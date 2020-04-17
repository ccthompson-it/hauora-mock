import React from "react"
import { useDrag, useDrop } from 'react-dnd'

const ItemTypes = {
  TEXT: 'text',
}



function DragDropBox(props) {
  const { id, empty, changePosition } = props

  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ItemTypes.TEXT,
      id
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  })

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ItemTypes.TEXT,
    drop: (res) => { changePosition(res.id) },
    canDrop: (res) => empty,
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop()
    })
  })

  return (
    <div className="square" ref={drop}>
      <div className="text-container">
        {!empty && <p className="middle-text" ref={drag}>{isDragging ? 'Weeee!' : "Drag Me!"}</p>}
        {empty && canDrop && <p className="middle-text">Drop it here!</p>}
      </div>
    </div>
  )
}

export default DragDropBox