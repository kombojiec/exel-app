import { ExelComponent } from '../../core/ExelComponent';
import { tableTemplate } from './tableTemplate';
import {dom} from '../../core/DomElement';
import {resizeHandler, keyHandler, setTableSize, setTableData} from './tableHandlers';
import { TableSelection } from './TableSelection';
import * as actions from '../../redux/actions';
import { initialStyles } from '../../scripts/constants';

export class Table extends ExelComponent{
  static className = 'table';

  constructor(root, options){
    super(root, {
      name: 'Table',
      listeners: ['mousedown', 'click', 'keydown', 'input'],
      options
    })
    this._root = root;
    this._tableState = options.tableState
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
      this.dispatch(actions.changeTextAction({
        value: data,
        id:this.selection.current.id
      }))

    })
    this.on('formula:enter', () => {
      this.selection.current.focus();
    })
    this.emit('cell:click', this.selection.current.textContent())
    setTableSize(this.store.getState().tableState, this._root._element);
    setTableData(this.store.getState().tableText, this._root._element);

    this.on('toolbar:applystyle', style => {
      this.selection.applyStyle(style);
      this.dispatch((actions.applyStyleAction({
        style,
        ids: this.selection.selectedIds
      })))
    })

  }
  
  toHTML(){
    return tableTemplate();
  }

  onInput(event){
    this.dispatch(actions.changeTextAction({
      value: event.target.textContent,
      id:dom(event.target).id
    }))    
  }

  resizeTable(event){
    resizeHandler(event, this._root)
    .then(data => this.dispatch(actions.tableResizeAction(data)))    
  }

  onMousedown(downEvent){
    const target = downEvent.target;
    if(target.dataset.resize){
      this.resizeTable(downEvent)      
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
    const target = event.target
    if(target.dataset.id){
      this.emit('cell:click', event.target.textContent);
      const styles = (dom(target).getStyles(Object.keys(initialStyles)));
      console.log('styles for dispatch: ', styles)
      this.dispatch(actions.changeStylesAction(styles))
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
