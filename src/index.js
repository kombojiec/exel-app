import { Exel } from './components/exel/Exel';
import './index.css';
import {setImages} from './scripts/images';
import { Header } from './components/header/Header';
import { Toolbar } from './components/toolbar/Toolbar';
import { Formula } from './components/formula/Formula';
import { Table } from './components/table/Table';

const exel = new Exel('#app', {
  components: [Header, Toolbar, Formula, Table]
});
 exel.render();
 setImages();