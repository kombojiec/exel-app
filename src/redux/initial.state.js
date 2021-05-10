import { initialStyles } from "../scripts/constants"
import { storage } from "../scripts/utiles"


const defaultState = {
  tableState: {},
  tableText: {},
  currentText: '',
  currentStyles: initialStyles,
  stylesState: {},
}

export const initialState = storage('table-state')? storage('table-state'): defaultState