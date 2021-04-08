import React, {useState} from 'react';

import IndiretaFilho from './IndiretaFilho'

export default props => {
    const [curso, setCurso] = useState('Desenvolvimento de Sistems')
    const [aluno, setAluno] = useState('')

  return(
      <div>
            <h3>Curso: {curso}</h3>
            <h3>Aluno: {aluno}</h3>
            <p><IndiretaFilho quandoClicar={aluno} /></p>
      </div>
  )
}
