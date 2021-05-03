import { ExelComponent } from '../../core/ExelComponent';
import { tableTemplate } from './tableTemplate';

export class Table extends ExelComponent{
  static className = 'table';
  
  toHTML(){
    return tableTemplate();
  }

}