import { DomListener } from "./DomListener";


export class ExelComponent extends DomListener{

  constructor(root, options = {}){
    super(root, options)
  }

  // Возврат HTML структуры компонента
  toHTML(){
    return '';
  }

  init(){
    this.initDOMListeners();
  }

  destroy(){
    this.removeDomListeners();
  }

}