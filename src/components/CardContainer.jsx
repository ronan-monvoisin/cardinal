import React from 'react'
import styled from 'styled-components'
import { Draggable } from "react-beautiful-dnd";

const Card = styled.div`
  opacity: ${props => props.opacity};
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
const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: 8 * 2,
  margin: `0 0 8px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle
});

export function CardContainer(props) {
  return (
    <Draggable draggableId={props.key}>
      {(provided, snapshot) => (
        <CardContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style
          )}
        >
          <Card>{props.lettre}</Card>
        </CardContainer>
      )}
    </Draggable>
  )
}