import bold from '../images/bold-text.svg'
import italic from '../images/italic-text.svg'
import underline from '../images/underlined-text.svg'
import center from '../images/justification.svg'
import left from '../images/left-align.svg'
import right from '../images/right-align.svg'

export const setImages = () =>{
  document.getElementById('bold').style.background = ` center / 50% no-repeat url(${bold})`;
  document.getElementById('italic').style.background = ` center / 50% no-repeat url(${italic})`;
  document.getElementById('underline').style.background = ` center / 50% no-repeat url(${underline})`;
  document.getElementById('left').style.background = ` center / 50% no-repeat url(${left})`;
  document.getElementById('center').style.background = ` center / 50% no-repeat url(${center})`;
  document.getElementById('right').style.background = ` center / 50% no-repeat url(${right})`;
}
