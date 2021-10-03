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
            <Container/>
        </main>
    )
}

export default Home;