export type Action =
  | { type: "ADD_LIST", payload: string }
  | { type: "ADD_TASK", payload: { text: string; listId: string} };

/**
 * We’ve defined the type alias Action 
 * and then we’ve passed two types separated by a vertical line to it. 
 * This means that the Action type now can resolve to one of the forms 
 * that we’ve passed. So it works like logical inclusive disjunction.
 */

// SECOND WAY
/*
  interface AddListAction {
    type: "ADD_LIST";
    payload: string;
  };

  interface AddTaskAction {
    type: "ADD_TASK"
    payload: { text: string; listId: string }
  }
  type Action = AddListAction | AddTaskAction
*/

export const addTask = ( text: string, listId: string ): Action => ({
  type: "ADD_TASK",
  payload: { text, listId }
});

export const addList = ( text: string, ): Action => ({
  type: "ADD_LIST", 
  payload: text
})