import React from 'react'
import styled from 'styled-components'

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

export function CardContainer(props) {
  return (
    <Card
      ref={props.provided.innerRef}
      {...props.provided.draggableProps}
      {...props.provided.dragHandleProps}
    >
      {props.children}
    </Card>
  )
}