import './HowAre.css'
import Testimonials from './Testimonials'

const HowAre = () => {
    return(
        <section className="how__are section" id="depoimentos">
            <div className='container'>
                <h2 className="section__title how__are-title">Quem somos</h2>
                <p className="how__are__text">Aqui no Studio Moov a equipe é composta por fisioterapeutas, especialistas no movimento e na dor.<br />
                Os atendimentos realizados são todos personalizados, aliados aos objetivos e necessidades individuais de cada um.</p>

                <span className="section__title">Depoimentos</span>
                
                <Testimonials />
            </div>
        </section>
    )
}

export default HowAre
