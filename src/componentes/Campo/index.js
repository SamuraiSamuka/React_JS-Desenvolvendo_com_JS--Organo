import './Campo.css'

const Campo = ({ type = 'text', label, placeholder, valor, aoAlterado, obrigatorio = false }) => {
    return (<div className={`campo__${type}`}>
        <label>{label}</label>
        <input 
            type={type} 
            value={valor} 
            onChange={evento => aoAlterado(evento.target.value)} 
            required={obrigatorio} 
            placeholder={placeholder}/> 
    </div>)
}

export default Campo