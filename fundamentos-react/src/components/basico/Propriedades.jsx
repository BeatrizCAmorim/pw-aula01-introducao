import React from 'react'

export default function Propiredades(props) {
  return(
     <div>
         <h3>Nome: {props.nome}{props.sobrenome}</h3>
         <h3>Idade: {props.idade}</h3>
     </div>
  )
}