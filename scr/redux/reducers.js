export default function (state, action) {
  switch (action.type) {
    case 'DONE_TASK':
      const newDoneList = [...state.doneList, action.payload.toDo];
      return {...state, doneList: newDoneList};
      case 'REMOVE_DONE_TASK':
        let newList = [...state.doneList];
        let filtiredList = newList.filter((i, index) => index !== action.payload.index)
        return {...state, doneList: filtiredList};
    default:
        return state
  }
}
