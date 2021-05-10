import { DomListener } from "./DomListener";


export class ExelComponent extends DomListener{

  constructor(root, options = {}){
    super(root, options)
    this.prepare();
    this.observer = options.options.observer;
    this._unsubscribes = [];
    this.store = options.options.store;
    this.subscribe = options.subscribe || [];
  }

  prepare(){}

  storeChanged(){}

  isWatching(key){
    return this.subscribe.includes(key);
  }

  emit(event, ...data){
    this.observer.emit(event, ...data);
  }

  on(event, callback){
    const unsubscribe = this.observer.subscribe(event, callback);
    this._unsubscribes.push(unsubscribe);
  }

  dispatch(action){
    this.storeSubscribe = this.store.dispatch(action);
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