import React from 'react'
import { Card } from "./Card";
import styled from 'styled-components'
import { Droppable } from "react-beautiful-dnd";


const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : '',
  display: 'flex',
  padding: '8px',
  overflow: 'auto',
});

const StyledDraw = styled.div`
  position:absolute;
  top:30px;
  right:30px;
  display:flex;
`

const CardDraw = styled.div`
  width: 90px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align:center;
  font-size: 30px;
  border-radius: 5px;
  box-shadow: 0 2px 7px 1px rgba(31,31,31,0.2);
  background-color: #EEE;
  color: #000;
  position:relative;
  cursor: pointer;
  margin:5px;
`


export function Draw(props) {
  return (
    <StyledDraw id={props.item.name}>
      <Droppable droppableId={props.item.name} direction="horizontal">
        {(provided, snapshot) => (
          <div ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
            {...provided.droppableProps}
          >
            {props.item.cards.map((card, index) => (
              <Card card={card} index={index} key={card.id} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      {(!props.item.empty) ?
        <CardDraw onClick={() => (props.onClicked())} > Draw</CardDraw>
        : ''}
    </StyledDraw>
  )
}