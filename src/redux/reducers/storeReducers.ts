import {ADD_STORE, REMOVE_STORE, UPDATE_STORE} from '../ActionType/actionType'

interface IStore {
    id:number,
    name:string,
}
const initialState: { stores: IStore[] } = {
    stores: [],
  };
  
  interface IAction {
    type: string;
    payload: IStore | number;
  }

  const storesReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
      case ADD_STORE:
        return { ...state, stores: [...state.stores, action.payload] };
      case REMOVE_STORE:
        return { ...state, stores: state.stores.filter((store) => store.id !== action.payload) };
      case UPDATE_STORE:
        return {
          ...state,
         
        };
      default:
        return state;
    }
  };
  
  export default storesReducer;
  