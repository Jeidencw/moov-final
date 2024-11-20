import './Localization.css'

const Localization = () => {
    return (
        <section className="localization section" id="localization">
            <h2 className="section__title">Localização</h2>

            <div className="localization__container container">
                <iframe title="localização no mapa do studio moov" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d637.3236059579646!2d-49.096033368334346!3d-25.36304550214557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcedf3d3ec70f9%3A0x5d61941946f53adc!2sStudio%20MOOV!5e0!3m2!1spt-BR!2sbr!4v1685582804609!5m2!1spt-BR!2sbr" allowFullScreen loading="lazy" referrerPolicy='no-referrer-when-downgrade'></iframe>

                <div className="localization__text">
                    <p>R. Prof. Duílio Calderari, 1354 - Térreo - Jardim Paulista</p>
                    <p>Campina Grande do Sul - PR, 83430-000</p>
                </div>
            </div>
        </section>
    )
}

export default Localization
