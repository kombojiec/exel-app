import { ExelComponent } from '../../core/ExelComponent';
import { tableTemplate } from './tableTemplate';
import {dom} from '../../core/DomElement';
import {resizeHandler} from './resize';

export class Table extends ExelComponent{
  static className = 'table';

  constructor(root){
    super(root, {
      name: 'Table',
      listeners: ['mousedown']
    })
    this._root = root;
    this._findAll = this._findAll.bind(this);
  }
  
  toHTML(){
    return tableTemplate();
  }

  _findAll(selector){
    const array = [];
    Array.from(this._root._element.querySelectorAll(selector))
      .forEach(item =>{
        array.push(item);
      })
    return array;
  }

  onMousedown(downEvent){
    if(downEvent.target.dataset.resize){
      resizeHandler(downEvent, this._findAll);
    }
  }
}