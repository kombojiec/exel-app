import {dom} from '../../core/DomElement';
import { Observer } from '../../core/Observer';
import { StoreSubscriber } from '../../core/StoreSubscriber';

export class Exel{
  constructor(selector, options){
    this._element = dom(selector);
    this._components = options.components || [];
    this._observer = new Observer();
    this._store = options.store;
    this._tableState = options._tableState;
    this._subscriber = new StoreSubscriber(this._store)
  }

  getRoot(){
    const root = dom.create('div', 'exel');
    const componentOptions = {
      observer: this._observer,
      store: this._store, 
    }
    this._components = this._components.map(Component => {
      const rootElement = dom.create('div', Component.className);
      const component = new Component(rootElement, componentOptions);
      rootElement.html(component.toHTML());
      root.append(rootElement);
      return component;
    });
    return root;
  }

  render(){
    this._element.append(this.getRoot());
    this._subscriber.subscribeComponents(this._components)
    this._components.forEach(element => {
      element.init();
    });
  }

  destroy(){
    this._subscriber.unsubscribeFromStore();
    this._components.forEach(component => component.destroy())
  }

}