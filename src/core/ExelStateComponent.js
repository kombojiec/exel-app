import { setImages } from "../scripts/images";
import { ExelComponent } from "./ExelComponent";

export class ExelStateComponent extends ExelComponent{
  constructor(...args){
    super(...args);    
  }

  get template(){
    return JSON.stringify(this.state, null, 2)
  }

  initState(initialState){
    this.state = {...initialState};
  }

  setState(newState){
    this.state = {...this.state, ...newState}
    this._root.html(this.template)
    setImages();
  }

}