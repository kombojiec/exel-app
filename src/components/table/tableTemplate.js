const CODES = {
  A: 65,
  Z: 90
}

function createRow(info, data){
  return `
  <div class="table__row" data-parent="parent" data-row=${info}>
    <div class="table__row-info">
      ${info}
      ${info? '<div class="table__resize-row" data-resize="row"></div>': ''}
    </div>
    <div class="table__row-data">${data}</div>
  </div>
  `
}

function createColumn(value = ''){
  return `
    <div class="table__column" data-parent="parent" data-col=${value}>
      ${value}
      <div class="table__resize-col" data-resize="col"></div>
    </div>
  `
}

function createChar(start, index){
  return String.fromCharCode(start + index)
}

function createCell(index, alpha){
  return `
    <div class="table__cell" contenteditable='true' data-col="${alpha}" data-row="${index}"></div> 
  `
}

export const tableTemplate = (rowsCount = 41) => {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];
  for(let i = 0; i < rowsCount; ++i){
    const cols = [];
    if(i == 0){
      for(let j = 0; j < colsCount; ++j){
        cols.push(createColumn(createChar(CODES.A, j)))
      }
      rows.push(createRow('', cols.join('')))
    }else{
      for(let k = 0; k < colsCount; ++k){
        cols.push(createCell(i, createChar(CODES.A, k)))
      }
      rows.push(createRow(i, cols.join('')))
    }
  }

  return rows.join('');
}