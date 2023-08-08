import './Campo.css'

interface CampoProps {
    type: string
    label: string
    placeholder: string
    valor: string
    obrigatorio: boolean
    aoAlterado: (valor: string) => void
}
const Campo = ({ type = 'text', label, placeholder, valor, aoAlterado, obrigatorio = false }:CampoProps) => {
    return (<div className={`campo__${type}`}>
        <label>{label}</label>
        <input 
            type={type} 
            value={valor} 
            onChange={(evento: React.ChangeEvent<HTMLInputElement>) => aoAlterado(evento.target.value)} 
            required={obrigatorio} 
            placeholder={placeholder}/> 
    </div>)
}

export default Campo