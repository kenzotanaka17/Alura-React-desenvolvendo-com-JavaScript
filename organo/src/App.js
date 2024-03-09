import { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario/Formulario";
import Time from "./componentes/Time/Time";
import Rodape from "./componentes/Rodape/Rodape";

function App() {

  const times = [
    {
      nome: 'Corinthians',
      corPrimaria: '#fff',
      corSecundaria: '#373636'
    },
    {
      nome: 'Palmeiras',
      corPrimaria: '#109c00',
      corSecundaria: '#62ad5a'
    },
    {
      nome: 'São Paulo',
      corPrimaria: '#000',
      corSecundaria: '#ff0019'
    },
    {
      nome: 'Santos',
      corPrimaria: '#050505',
      corSecundaria: '#4a4949'
    },
  ]

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      
      <Rodape />
    </div>
  );
}

export default App;
