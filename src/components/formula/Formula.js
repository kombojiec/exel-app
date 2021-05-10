
import { ExelComponent } from '../../core/ExelComponent';
import {dom} from '../../core/DomElement';

export class Formula extends ExelComponent{
  static className = 'formula';

  constructor(root, options){
    super(root, {
      name: 'formula',
      listeners: ['input', 'keydown'],
      subscribe: ['currentText'],
      options
    });
  }  
  
  init(){
    this._input = this._root._element.querySelector("#formula-input");
    super.init();
    this.on('cell:click', data => {
      this._input.textContent = data;
    })
    this.on('cell:keydown', data => {
      this._input.textContent = data.textContent();
    })
  }

  toHTML(){
    return `
      <div class="formula__info">fx</div>
      <div class="formula__input" id="formula-input" contenteditable="true" spellcheck="false"></div>
    `;
  }

  onInput(event){
    this.emit('formula:input', dom(event.target).textContent())
  }

  onKeydown(event){
    const keys = ['Enter', 'Tab']
    if(keys.includes(event.key)){
      event.preventDefault();
      this.emit('formula:enter', '');
    }
  }

  storeChanged(changes){
    this._input.textContent =  changes.currentText;
  }

}