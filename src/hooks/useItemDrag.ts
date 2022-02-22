import { useDrag } from "react-dnd";
import { useAppState } from "../state/AppStateContext";
import { DragItem } from "../types/DragItem";
import { setDraggedItem } from "../state/actions";

export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState();
  const [, drag] = useDrag({
    type: item.type,
    item: () => {
      dispatch(setDraggedItem(item))
      return item;
    },
    end: () => dispatch(setDraggedItem(null))
  })
  return { drag };
};

//type - it will be CARD or COLUMN
//item - returns dragged item object and dispatched the SET_DRAGGED_ITEM action
//end - is called when we release the item
