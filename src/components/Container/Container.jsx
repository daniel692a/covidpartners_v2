import './Container.css'
import { Link } from 'react-router-dom'

const Container = () => {
    return (
        <section className="ctn">
            <section className="sect">
                <h2>Bienvenido a Covidpartners</h2>
                <Link to="/consult">
                    <button>Ingresar</button>
                </Link>
            </section>
        </section>
    )
}

export default Container;