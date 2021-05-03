
import { ExelComponent } from '../../core/ExelComponent';

export class Formula extends ExelComponent{
  static className = 'formula';

  constructor(root){
    super(root, {
      name: 'formula',
      listeners: ['input', 'click']
    });
  }  

  toHTML(){
    return `
      <div class="formula__info">fx</div>
      <div class="formula__input" contenteditable="true" spellcheck="false"></div>
    `;
  }

  onInput(event){
    console.log('from the formula: ', event.target.textContent.trim());
  }

  onClick(){
    
  }

}