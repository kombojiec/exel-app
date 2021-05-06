export class TableSelection{
  static className = 'selected';

  constructor(){
    this._group = []
    this.current = null;
  }

  select(element){
    this._clear();
    this._group.push(element);
    this.current = element;
    this.current.focus();
    element.addClass(TableSelection.className);
  }

  selectGroup(element){
    if(this._group.some(item => item.data.id == element.data.id)){
      element.removeClass(TableSelection.className);
      this._group = this._group.filter(item => item.data.id != element.data.id);
    }else{
      this._group.push(element);
      element.addClass(TableSelection.className);    
    }
  }

  _clear(){
    this._group.forEach(element => {
      element.removeClass(TableSelection.className);
    })
    this._group.length = 0;
  }

}