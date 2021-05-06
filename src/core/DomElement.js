
class DomElement{
  constructor(selector){
    this._element = typeof selector === 'string'?
      document.querySelector(selector):
      selector;
    this.data = this._element.dataset;
    this.id = this._element.dataset.id
  }

  html(html){
    if(typeof html === 'string'){
      this._element.innerHTML = html;
      return this;
    }
    return this._element.outerHTML.trim();
  }

  textContent(text){
    if(typeof text == 'string'){
      this._element.textContent = text;
      return this;
    }
    if(this._element.tagName == 'INPUT'){
      return this._element.value.trim();
    }
    return this._element.textContent.trim();
  }

  findElement(selector){
    return dom(this._element.querySelector(selector));
  }

  findAll(selector){
    const array = [];
    Array.from(this._element.querySelectorAll(selector))
      .forEach(item =>{
        array.push(item);
      })
    return array;
  }

  addClass(className){
    this._element.classList.add(className);
    return this;
  }

  removeClass(className){
    this._element.classList.remove(className);
    return this;
  }

  focus(){
    this._element.focus();
    return this;
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
