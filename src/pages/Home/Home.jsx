import Container from "../../components/Container/Container";
import './Home.css';
import NASA from '../../assets/rocket.svg';

const Home = () => {
    return (
        <main>
            <section className="presentation" >
                <figure>
                    <img src={NASA} alt="Rocket" />
                </figure>
                <h1>
                    Covid-19 Calculate the risk
                </h1>
            </section>
            <Container
                text="Consultar Riesgo"
                routeLink="/consult"
            />
            <Container
                text="Ir al mapa"
                routeLink="/map-view"
            />
        </main>
    )
}

export default Home;