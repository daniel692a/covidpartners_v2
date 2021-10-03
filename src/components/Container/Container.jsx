import './Container.css'
import { Link } from 'react-router-dom'

const Container = ({text, routeLink}) => {
    return (
        <section className="ctn">
            <section className="sect">
                <h2>{text}</h2>
                <Link to={routeLink}>
                    <button>Ingresar</button>
                </Link>
            </section>
        </section>
    )
}

export default Container;