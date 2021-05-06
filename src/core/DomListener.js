import { capitalize } from './../scripts/utiles';

export class DomListener{
  constructor(root, options){
    if(!root){
      throw new Error('No root provided to DomListener');
    }
    this._root = root;
    this._name = options.name;
    this._listeners = options.listeners || [];
    this._observer = options.observer
  }

  initDOMListeners(){
    this._listeners.forEach(listener => {
      const method = getMethodName(capitalize(listener));
      if(!this[method]){
        throw new Error(`No method ${method} in ${this._name} Component`)
      }
      this[method] = this[method].bind(this)
      this._root.on(listener, this[method])
    })
  }

  removeDomListeners(){
    this._listeners.forEach(listener => {
      const method = getMethodName(capitalize(listener))
      this._root.off(listener, this[method]);
    })
  }
  
}

const getMethodName = (method) => {
  return 'on' + method;
}