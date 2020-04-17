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
      {!empty &&
        <div className="text-container draggable" ref={drag}>
          <p className="middle-text" >{isDragging ? 'Weeee!' : "Drag Me!"}</p>
        </div>
      }
      {empty && canDrop &&
        <div className="text-container">
          <p className="middle-text">Drop it here!</p>
        </div>
      }
    </div>
  )
}

export default DragDropBox