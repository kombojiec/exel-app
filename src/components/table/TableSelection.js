import { initialStyles } from "../../scripts/constants";

export class TableSelection{
  static className = 'selected';

  constructor(){
    this.group = []
    this.current = null;
  }

  select(element){
    this._clear();
    this.group.push(element);
    this.current = element;
    this.current.focus();
    element.addClass(TableSelection.className);
    console.log(element.getStyles(Object.keys(initialStyles)))
  }

  selectGroup(element){
    if(this.group.some(item => item.data.id == element.data.id)){
      element.removeClass(TableSelection.className);
      this.group = this.group.filter(item => item.data.id != element.data.id);
    }else{
      this.group.push(element);
      element.addClass(TableSelection.className);    
    }
  }

  get selectedIds(){
    return this.group.map(element => element.id);
  }

  _clear(){
    this.group.forEach(element => {
      element.removeClass(TableSelection.className);
    })
    this.group.length = 0;
  }

  applyStyle(styles){
    this.group.forEach(element => {
      element.css(styles);
    })
  }

}