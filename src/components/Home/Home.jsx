import './Home.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Keyboard, EffectFade, Pagination } from 'swiper/modules'

import img1 from './slide__img/1.jpg'
import img2 from './slide__img/2.jpg'
import img3 from './slide__img/3.jpg'
import { useState } from 'react'
import Modal from '../Services/Modal'

import { services as servicesProps } from '../Services/Services'

const servicosSlides = [
    {
        name: 'LPF',
        foto: img1,
        fotoMobile: img3,
        id: 'jgsad873',
        description: 'Transforme sua silhueta e conquiste a barriga dos seus sonhos com o serviço LPF: A chave para a barriga negativa!'
    },
    {
        name: 'Pilates',
        foto: img2,
        fotoMobile: img3,
        id: 'ma,n34',
        description: 'Fortaleça seu corpo, acalme sua mente: Descubra o poder do Pilates!'
    },
    {
        name: 'Fisioterapia',
        foto: img1,
        fotoMobile: img3,
        id: 'nbsd3934',
        description: 'A fisioterapia promove a saúde e trata disfunções físicas, visando melhorar a funcionalidade e qualidade de vida.'
    },
    {
        name: 'Treinamento funcional',
        foto: img1,
        fotoMobile: img3,
        id: 'qwoiey3846',
        description: 'Potencialize seu corpo, liberte sua força: Treinamento Funcional de excelência!'
    },
    {
        name: 'Bungee',
        foto: img1,
        fotoMobile: img3,
        id: 'bnsndksi232',
        description: 'Potencialize seu corpo, liberte sua força: Treinamento Funcional de excelência!'
    }
]



const Home = () => {
    const [isActive, setIsActive] = useState(null)
    const [selectedService, setSelectedService] = useState(null)

    const openModal = ser => { 
        const selectedService = servicesProps.find(service => service.name === ser.name)

        setIsActive(true)
        setSelectedService(selectedService)
    }
  
    const closeModal = event => {
        if(event.target.className === 'services__modal modal active-modal' || event.target.className === 'uil uil-times services__modal-close'){
            setIsActive(false)
            setSelectedService(null)
        }
    }

    return (
        <section className="home section" id="home">
            <div className="home__container container">
                <Swiper
                    grabCursor={true}
                    keyboard={{ enabled: true }}
                    navigation={true}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: true }}
                    modules={[Autoplay, Navigation, Keyboard, EffectFade, Pagination]}
                    pagination={{ dynamicBullets: true, clickable: true }}
                    className="slide__container"
                    effect="fade"
                >
                    {servicosSlides.map(servico => (
                        <SwiperSlide key={servico.id} className="card" onClick={() => openModal(servico)}>
                            <img src={servico.foto} className="card__image desktop" alt={servico.name} />
                            <img src={servico.fotoMobile} className="card__image mobile" alt={servico.name} />
                            <div className="card__content">
                                <h2 className="slide__title">{servico.name}</h2>
                                <p className="slide__description">{servico.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                    {isActive && <Modal openModal={isActive} closeModal={closeModal} service={selectedService} />}
                </Swiper>
            </div>
        </section>

    )
}

export default Home