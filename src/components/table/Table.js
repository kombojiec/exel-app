import { ExelComponent } from '../../core/ExelComponent';
import { tableTemplate } from './tableTemplate';
import {dom} from '../../core/DomElement';
import {resizeHandler, keyHandler} from './tableHandlers';
import { TableSelection } from './TableSelection';

export class Table extends ExelComponent{
  static className = 'table';

  constructor(root, options){
    super(root, {
      name: 'Table',
      listeners: ['mousedown', 'click', 'keydown', 'input'],
      observer: options.observer
    })
    this._root = root;    
  }

  prepare(){
    this.selection = new TableSelection();
  }

  init(){
    super.init();
    const cell = this._root.findElement('[data-id="1A"]');
    this.selection.select(cell);
    this.on('formula:input', data => {
      this.selection.current.textContent(data)
    })
    this.on('formula:enter', () => {
      this.selection.current.focus();
    })
    this.emit('cell:click', this.selection.current.textContent())
  }
  
  toHTML(){
    return tableTemplate();
  }

  onInput(event){
    this.emit('cell:input', event.target.textContent)
  }

  onMousedown(downEvent){
    const target = downEvent.target;
    if(target.dataset.resize){
      resizeHandler(downEvent, this._root);
    }

    if(target.dataset.id){
      if(downEvent.shiftKey){
        this.selection.selectGroup(dom(target));
      }else{
        this.selection.select(dom(target));
      }
    }
  }

  onClick(event){
    if(event.target.dataset.id){
      this.emit('cell:click', event.target.textContent);

    }
  }

  onKeydown(event){
    if(event.shiftKey || event.key == 'Tab'){
      event.preventDefault();
    }
    if(event && !event.shiftKey){
      if(event.key == 'Enter'){
        event.preventDefault();
      }
      const target = event.target;
      const lastRow = this._root.findElement('[data-lastrow="true"]')._element.innerText;
      const lastColumn = this._root.findElement('[data-lastcol="true"]')._element.innerText;
      const nextElement = this._root.findElement(keyHandler(event.key, target.dataset, lastRow, lastColumn));
      this.selection.select(nextElement);
      this.emit('cell:keydown', nextElement)
    }
  }

}
