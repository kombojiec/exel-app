import {dom} from '../../core/DomElement';
import { Observer } from '../../core/Observer';

export class Exel{
  constructor(selector, options){
    this._element = dom(selector);
    this._components = options.components || [];
    this._observer = new Observer();
  }

  getRoot(){
    const root = dom.create('div', 'exel');
    this._components = this._components.map(Component => {
      const rootElement = dom.create('div', Component.className);
      const component = new Component(rootElement, {observer: this._observer});
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

  destroy(){
    this._components.forEach(component => component.destroy())
  }

}