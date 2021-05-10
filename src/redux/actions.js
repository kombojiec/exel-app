import {TABLE_SIZE, CHANGE_TEXT, CHANGE_STYLES, APPLY_STYLE} from './types';

function tableResizeAction(data){
  return {
    type: TABLE_SIZE,
    data
  }
}

function changeTextAction(data){
  return {
    type: CHANGE_TEXT,
    data
  }
}

function changeStylesAction(data){
  return {
    type: CHANGE_STYLES,
    data
  }
}

function applyStyleAction(data){
  return {
    type: APPLY_STYLE,
    data
  }
}

export {tableResizeAction, changeTextAction, changeStylesAction, applyStyleAction}