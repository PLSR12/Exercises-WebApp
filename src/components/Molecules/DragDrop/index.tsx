import { Droppable } from 'react-beautiful-dnd'
import { ItemDragDrop } from './item'

export const DragDrop = ({ type, list, droppableId }: any) => {
  return (
    <Droppable droppableId={droppableId}>
      {(provided: any) => (
        <ul className={droppableId} ref={provided.innerRef}>
          {list.map((item: any, index: number) => {
            return <ItemDragDrop id={item.id} key={index} index={index} textOne={item.name} />
          })}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  )
}
