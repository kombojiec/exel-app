import { initialStyles } from "./constants";

export const capitalize = (value) => {
  if(typeof value !== 'string'){
    return '';
  }
  return value.charAt(0).toUpperCase() + value.slice(1)
}

export function storage(key, value = null){
  if(value){
    localStorage.setItem(key, JSON.stringify(value));
  }else{
    return JSON.parse(localStorage.getItem(key));
  }
}

export function isEqual(a, b){
  if(typeof a === 'object' && typeof b === 'object'){
    return JSON.stringify(a) === JSON.stringify(b);
  }else{
    return JSON.stringify(a) === JSON.stringify(b);
  }
}

export function camelToCebab(string){
  return string.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
 }

export function toInlineStyles(styles = {}){
  return Object.keys(styles)
    .map(key => `${camelToCebab(key)}: ${styles[key]}`)
    .join(';');
}