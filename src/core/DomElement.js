
class DomElement{
  constructor(selector){
    this._element = typeof selector === 'string'?
      document.querySelector(selector):
      selector;
    
  }

  html(html){
    if(typeof html === 'string'){
      this._element.innerHTML = html;
      return this;
    }
    return this._element.outerHTML.trim();
  }

  clear(){
    this.html('');
    return this;
  }

  on(eventType, callback){
    this._element.addEventListener(eventType, callback);
  }

  off(eventType, callback){
    this._element.removeEventListener(eventType, callback);
  }

  append(node){
    if(node instanceof DomElement){
      node = node._element
    }
    this._element.append(node);
    return this;
  }

}



export function dom(selector){
  return new DomElement(selector);
}

dom.create = (tagName, className) => {
  const element =  document.createElement(tagName);
  element.className = className? className: '';
  return dom(element);
}
