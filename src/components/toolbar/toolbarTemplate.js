export function createToolbar(buttons, state){
  return buttons.map(button => {
    const meta = `data-value=${JSON.stringify(button.value)}`
    return `
    <li class="toolbar__item">
      <button class="button toolbar__button ${button.active? 'active': ''}" id="${button.type}" ${meta}></button>
    </li>`
  }).join('');
}

export function buttonsState(state){
  return [
    {
      type: "left",
      active: state['textAlign'] == 'left',
      value: {
        'textAlign': 'left'
      }
    }, 
    {
      type: "center",
      active: state['textAlign'] == 'center',
      value: {
        'textAlign': 'center'
      }
    }, 
    {
      type: "right",
      active: state['textAlign'] == 'right',
      value: {
        'textAlign': 'right'
      }
    }, 
    {
      type: "bold",
      active: state['fontWeight'] == 'bold',
      value: {
        'fontWeight': state['fontWeight'] == 'bold'? 'normal': 'bold'
      }
    }, 
    {
      type: "italic",
      active: state['fontStyle'] == 'italic',
      value: {
        'fontStyle': state['fontStyle'] == 'italic'? 'normal': 'italic'
      }
    }, 
    {
      type: "underline",
      active: state['textDecoration'] == 'underline',
      value: {
        'textDecoration': state['textDecoration'] == 'underline'? 'none': 'underline'
      }
    }
  ]
}

