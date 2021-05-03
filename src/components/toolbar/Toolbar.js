import { ExelComponent } from '../../core/ExelComponent';

export class Toolbar extends ExelComponent{
  static className = 'toolbar';

  constructor(root){
    super(root, {
      name: 'Toolbar',
      listeners: ['click']
    })
  }

  onClick(event){
    console.log(event.target)
  }
  
  toHTML(){
    return `
      <ul class="toolbar__list">          
        <li class="toolbar__item">
          <button class="button toolbar__button" id="bold"></button>
        </li>
        <li class="toolbar__item">
          <button class="button toolbar__button" id="italic"></button>
        </li>
        <li class="toolbar__item">
          <button class="toolbar__button button" id="underline"></button>
        </li>  
        <li class="toolbar__item">
          <button class="button toolbar__button" id="left"></button>
        </li>
        <li class="toolbar__item">
          <button class="button toolbar__button" id="center"></button>
        </li>
        <li class="toolbar__item">
          <button class="button toolbar__button" id="right"></button>
        </li>        
      </ul>
    `;
  }

}