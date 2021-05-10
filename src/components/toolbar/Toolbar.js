import { ExelStateComponent } from '../../core/ExelStateComponent';
import { initialStyles } from '../../scripts/constants';
import { createToolbar, buttonsState } from './toolbarTemplate';

export class Toolbar extends ExelStateComponent{
  static className = 'toolbar';

  constructor(root, options){
    super(root, {
      name: 'Toolbar',
      listeners: ['click'],
      subscribe: ['currentStyles'],
      options
    })
  }

  prepare(){
    this.initState(initialStyles)
  }

  get template(){
    return `
      <ul class="toolbar__list">  
        ${createToolbar(buttonsState(this.state), this.state)}       
      </ul>
    `
  }

  onClick(event){
    const target = event.target;
    if(target.classList.contains('button')){
      const value = JSON.parse(target.dataset.value);
      // const key = Object.keys(value)[0];
      // this.setstate({[key]: value[key]})
      this.emit('toolbar:applystyle', value)
    }
  }
  
  toHTML(){
    return this.template
  }

  storeChanged(changes){
    console.log('changes: ', changes);
    this.setState(changes.currentStyles)
  }

  

}