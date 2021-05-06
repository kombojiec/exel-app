import { DomListener } from "./DomListener";


export class ExelComponent extends DomListener{

  constructor(root, options = {}){
    super(root, options)
    this.prepare();
    this.observer = options.observer;
    this._unsubscribes = [];
  }

  prepare(){
    
  }

  emit(event, ...data){
    this.observer.emit(event, ...data);
  }

  on(event, callback){
    const unsubscribe = this.observer.subscribe(event, callback);
    this._unsubscribes.push(unsubscribe);
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
    this._unsubscribes.forEach(subscribe => subscribe());
  }

}