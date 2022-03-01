import React from 'react'
import styled from 'styled-components'
import { Draggable } from "react-beautiful-dnd";

const CardContent = styled.div`
  width: 90px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align:center;
  font-size: 100px;
  border-radius: 5px;
  box-shadow: 0 2px 7px 1px rgba(31,31,31,0.2);
  background-color: #EEE;
  color: #000;
  position:relative;
  cursor: grab;
`

export function Card(props) {
  return (
    <Draggable draggableId={props.card.id} index={props.index}>
      {provided => (
        <CardContent
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {props.card.lettre}
        </CardContent>
      )}
    </Draggable>
  )
}