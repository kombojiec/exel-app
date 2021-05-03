import {dom} from '../../core/DomElement';

export class Exel{
  constructor(selector, options){
    this._element = dom(selector);
    this._components = options.components || [];
  }

  getRoot(){
    const root = dom.create('div', 'exel');
    this._components = this._components.map(Component => {
      const rootElement = dom.create('div', Component.className);
      const component = new Component(rootElement);
      //Debug
      if(component._name){
        window['c' + component._name] = component;
      }
      //
      rootElement.html(component.toHTML());
      root.append(rootElement);
      return component;
    });
    return root;
  }

  render(){
    this._element.append(this.getRoot())
    this._components.forEach(element => {
      element.init();
    });
  }

}