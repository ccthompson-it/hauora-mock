import React from "react"
import { useDrop } from 'react-dnd'

const ItemTypes = {
  TEXT: 'text',
}

function checkBoxEmpty(boxText) {
  if(boxText === null) { 
    return true 
  } else {
    return false
  }
}

function DropBox(props) {
  const { boxId, boxText, changeText, removeText } = props

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ItemTypes.TEXT,
    drop: (res) => { changeText(boxId, res.text) },
    canDrop: (res) => checkBoxEmpty(boxText),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop()
    })
  })

  return (
    <div className="droppable-box" ref={drop}>
      {(boxText !== null) && <p onClick={() => removeText(boxId)}>{boxText}</p>}
    </div>
  )
}

export default DropBox