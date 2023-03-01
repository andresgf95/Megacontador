import { useState } from 'react';

function NovoBoton({texto, operador}) {

  let [Click, SetClick] = useState(0)

  function BotonClick() {
    const NovoClick = Click + 1
    SetClick(NovoClick)
    operador()
    }

  return (
  <button onClick={BotonClick}>{texto}</button>
  )
}

export default NovoBoton;