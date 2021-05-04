export function resizeHandler(downEvent, findAll){
  const parent = downEvent.target.closest('[data-parent="parent"]');
  const coords = parent.getBoundingClientRect();
  let target = downEvent.target.dataset.resize == 'col'? 'col': 'row';
  const cells = findAll(`[data-${target}="${parent.dataset[target]}"]`) 
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
    target == 'col'?
      cells.forEach(cell => {
        cell.style.width = spread + `px`;
      }):
      parent.style.height = spread + `px`;
  }
}