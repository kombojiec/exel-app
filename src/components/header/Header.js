
import { ExelComponent } from './../../core/ExelComponent';

export class Header extends ExelComponent{
  static className = 'header';

  toHTML(){
    return `
    <input type="text" class="header__input" value="Новая таблица">
    <div class="header__buttons">
      <button class="button header-button">Удалить</button>
      <button class="button header-button">Выйти</button>
    </div>
    `;
  }

}