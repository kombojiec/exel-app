import { toInlineStyles } from '../scripts/utiles';
import {CHANGE_TEXT, TABLE_SIZE, CHANGE_STYLES, APPLY_STYLE} from './types';

export function rootReducer(state, action){

  let prevState = state.tableState || {};
  
  switch(action.type){

    case TABLE_SIZE:
      prevState[action.data.id] = action.data.value;
      return {...state, tableState: prevState} // id + value
    
    case CHANGE_TEXT:
      const data = state.tableText || {};
      data[action.data.id] = action.data.value;
      return {...state, currentText: action.data.value, tableText: data}

    case CHANGE_STYLES:
      return {...state, currentStyles: action.data}

      case APPLY_STYLE:
        const field = 'stylesState'
        const value = state[field] || {};
        action.data.ids.forEach(id => {
          value[id] = toInlineStyles(action.style)
        })
      return {
        ...state, 
        [field]: value, 
        currentStyles: {...state.currentStyles, ...action.data.style}
      }

    default: return state;

  }
}