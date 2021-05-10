
export function resizeHandler(downEvent, root){
  return new Promise(resolve => {

    const parent = downEvent.target.closest('[data-parent="parent"]');
    const coords = parent.getBoundingClientRect();
    let target = downEvent.target.dataset.resize == 'col'? 'col': 'row';
    const cells = root.findAll(`[data-${target}="${parent.dataset[target]}"]`) 
    let position;
    let spread;
    
    if(target == 'col'){
      downEvent.target.style.height = 100 + 'vh';
    }else{
      downEvent.target.style.width = 100 + 'vw';
    }
    
    document.onmousemove = moveEvent => {
      position = target == 'col'? moveEvent.clientX: moveEvent.clientY;
      spread =  target == 'col'? position - coords.x: position - coords.y;
      target == 'col'? parent.style.width = spread + 'px': parent.style.height = spread + 'px';
      
    }
    
    document.onmouseup = upEvent => {
      document.onmousemove = null;
      document.onmouseup = null;

      if(target == 'col'){
        cells.forEach(cell => {
          cell.style.width = spread + `px`;
        })
        resolve({
          id: parent.dataset.col,
          value: ~~spread,
        })
      }else{
        parent.style.height = spread + `px`;
        resolve({
          id: parent.dataset.row,
          value: ~~spread,
        })
      }

    }

  })
}

export function keyHandler(key, data, lastRow, lastColumn){
  let {row, col} = data;
  col = col.charCodeAt(col)
  switch(key){
    case 'Tab':
    case 'ArrowRight':
      if(col == lastColumn.charCodeAt(lastColumn)){
        break
      };
      ++col;
      break;
    case 'Enter':
    case 'ArrowDown':
      if(row == lastRow){
        break;
      }
      ++row;
      break;
    case 'ArrowLeft':
      if(col == 65){
        break
      };
      --col;
      break;
    case 'ArrowUp':
      if(row == 1){
        break
      }
      --row;
      break;
  }
  return `[data-id="${row}${String.fromCharCode(col)}"]`;
}

export function setTableSize(data, table){
  Object.keys(data).forEach(key => {
    if(parseInt(key)){
      const cell = table.querySelector(`[data-row="${key}"]`);
      cell.style.height = data[key] + 'px';
    }
    if(!parseInt(key)){
      const cells = table.querySelectorAll(`[data-col="${key}"]`);
      cells.forEach(cell => cell.style.width = data[key] + 'px');
    }
  })
}

export function setTableData(data, table){
  Object.keys(data).forEach(key => {
    table.querySelector(`[data-id="${key}"]`).textContent = data[key];
  })
}

