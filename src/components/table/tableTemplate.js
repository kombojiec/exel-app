import { initialStyles } from "../../scripts/constants"
import { toInlineStyles } from "../../scripts/utiles"

const CODES = {
  A: 65,
  Z: 90
}

function createRow(info, data, last = false){
  return `
  <div class="table__row" data-parent="parent" data-row=${info} data-lastRow=${last}>
    <div class="table__row-info">
      ${info}
      ${info? '<div class="table__resize-row" data-resize="row"></div>': ''}
    </div>
    <div class="table__row-data">${data}</div>
  </div>
  `
}

function createColumn(value = '', last = false){
  return `
    <div class="table__column" data-parent="parent" data-col=${value} data-lastCol=${last}>
      ${value}
      <div class="table__resize-col" data-resize="col"></div>
    </div>
  `
}

function createChar(start, index){
  return String.fromCharCode(start + index)
}

function createCell(index, alpha){
  const styles = toInlineStyles(initialStyles)
  return `
    <div class="table__cell" contenteditable='true' style='${styles}' data-col="${alpha}" data-row="${index}" data-id="${index}${alpha}"></div> 
  `
}

export const tableTemplate = (rowsCount = 31) => {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];
  for(let i = 0; i < rowsCount; ++i){
    const cols = [];
    if(i == 0){
      for(let j = 0; j < colsCount; ++j){
        if(j == colsCount - 1){
          cols.push(createColumn(createChar(CODES.A, j), true));
          continue;
        }
        cols.push(createColumn(createChar(CODES.A, j)));
      }
      rows.push(createRow('', cols.join('')));
    }else{
      for(let k = 0; k < colsCount; ++k){
        cols.push(createCell(i, createChar(CODES.A, k)));
      }
      if(i == rowsCount - 1){
        rows.push(createRow(i, cols.join(''), true));
        continue;
      }
      rows.push(createRow(i, cols.join('')))
    }
  }

  return rows.join('');
}