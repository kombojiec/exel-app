import './index.css';
import { Exel } from './components/exel/Exel';
import {setImages} from './scripts/images';
import { Header } from './components/header/Header';
import { Toolbar } from './components/toolbar/Toolbar';
import { Formula } from './components/formula/Formula';
import { Table } from './components/table/Table';
import { createStore } from './core/createStore';
import { rootReducer } from './redux/rootReducer';
import { storage } from './scripts/utiles';
import { initialState } from './redux/initial.state';

const store = createStore(rootReducer, storage('table-state') || initialState);

store.subscribe(data => {
  localStorage.setItem('table-state', JSON.stringify(data))
})
const exel = new Exel('#app', {
  components: [Header, Toolbar, Formula, Table],
  store, 
});
 exel.render();
 setImages();

