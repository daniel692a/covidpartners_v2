import './Form.css'
import { Link } from 'react-router-dom'

const Form = () => {
    return (
        <section className="ctn">
            <form action="/dashboard" className="sect">
                <h2>Ingresa Tus Datos</h2>
                <label htmlFor="d1" className="inputs">
                    <span>Dato 1:</span>
                    <input type="text" placeholder="Dato 1" name="d1" />
                </label>
                <label htmlFor="d2" className="inputs">
                    <span>Dato 2:</span>
                    <input type="text" placeholder="Dato 2" name="d2" />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </section>
    )
}

export default Form;