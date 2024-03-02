import './Time.css';

const Time = (props) => {

    const primaryC = {borderColor: props.corPrimaria }
    const secundaryC = {backgroundColor: props.corSecundaria}

    return (
        <section className='time' style={secundaryC}>
            <h3 style={primaryC}>{props.nome}</h3>
        </section>
    )
}

export default Time;