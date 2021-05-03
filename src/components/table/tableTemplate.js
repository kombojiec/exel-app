const CODES = {
  A: 65,
  Z: 90
}

function createRow(info, data){
  return `
  <div class="table__row">
    <div class="table__row-info">${info}</div>
    <div class="table__row-data">${data}</div>
  </div>
  `
}

function createColumn(value = ''){
  return `
    <div class="table__column">${value}</div>
  `
}

function createCell(){
  return `
    <div class="table__cell" contenteditable='true' ></div> 
  `
}

export const tableTemplate = (rowsCount = 51) => {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];
  for(let i = 0; i < rowsCount; ++i){
    const cols = [];
    if(i == 0){
      for(let i = 0; i < colsCount; ++i){
        cols.push(createColumn(String.fromCharCode(CODES.A + i)))
      }
      rows.push(createRow('', cols.join('')))
    }else{
      for(let i = 0; i < colsCount; ++i){
        cols.push(createCell())
      }
      rows.push(createRow(i, cols.join('')))
    }
  }

  return rows.join('');
}