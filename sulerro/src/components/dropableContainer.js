import { Draggable } from "react-beautiful-dnd";

const DroppableContainer = ({ provided }) => {
  return (
    <ul {...provided.droppableProps}>
      <Draggable>
        {(provided) => (
          <li {...provided.draggableProps} {...provided.dragHandleProps}>
            1
          </li>
        )}
      </Draggable>
      <Draggable>
        {(provided) => (
          <li {...provided.draggableProps} {...provided.dragHandleProps}>
            3
          </li>
        )}
      </Draggable>
    </ul>
  );
};
export default DroppableContainer;
