import styles from './Home.module.css'
import point from '../../img/point.jpg'
import Button from '../layout/Button'


export default function Home() {

    return (
        <section className={ styles.homeContainer}>
            <h1>
                Bem vindo ao sistema de gerenciamento da <span>acme</span><small>&copy; </small>
            </h1>

            <img src={point} alt="medic woman pointing" title="Photo by Bermix Studio on Unsplash" />
            <p>Aqui você encontra a melhor solução para administrar os pacientes da clínica. Fácil e rápido, o sistema acme de gerenciamento
                te oferece a mais moderna tecnologia web para gestão da clínica, sem mais cadastros no papel ou em sistemas obsoletos.  </p>
            <Button to="/ListPatients" text="Lista de pacientes"></Button>


        </section>
    )
}