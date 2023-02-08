import { Draggable } from 'react-beautiful-dnd'

export const ItemDragDrop = ({ id, index, textOne }: any) => {
  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided: any) => (
        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <p>{textOne}</p>
        </li>
      )}
    </Draggable>
  )
}
