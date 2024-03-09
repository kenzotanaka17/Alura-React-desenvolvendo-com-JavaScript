import Colaborador from '../Colaborador/Colaborador';
import './Time.css';

const Time = (props) => {

    const primaryC = {borderColor: props.corPrimaria }
    const secundaryC = {backgroundColor: props.corSecundaria}

    return (
        (props.colaboradores.length > 0) && 
        <section className='time' style={secundaryC}>
            <h3 style={primaryC}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} idade={colaborador.idade} nome={colaborador.nome} time={colaborador.time} imagem={colaborador.imagem}/>)}
            </div>
        </section>
    )
}

export default Time;