export class Observer{
  constructor(){
    this._listeners = {};
  }

  emit(event, ...data){
    if(!this._listeners[event]){return};
    this._listeners[event].forEach(callback => {
      callback(...data);
    });
  }

  subscribe(event, callback){
    this._listeners[event] = this._listeners[event] || [];
    this._listeners[event].push(callback);
    return () => {
      this._listeners[event] = this._listeners[event].filter(listener => listener != callback);
    }
  }

}


