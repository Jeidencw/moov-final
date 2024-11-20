import Card from './Card' 
import './Services.css'
import './Modal.css'

import pilatesIcon from './icons/pilates__icon.svg'
import lpfIcon from './icons/lpf__icon.svg'
import treiIcon from './icons/funcional__icon.svg'
import fisioIcon from './icons/fisio__icon.svg'
import bungeeIcon from './icons/bungee__icon.svg'

export const services = [
    {
        id: 'bnsndksi232',
        name: 'Bungee',
        icon: bungeeIcon,
        descricao: 'LPF, também chamado de "barriga negativa", é um método de exercícios que utiliza técnicas de respiração e posturas inspiradas no RPG para fortalecer o abdômen com baixa pressão.',
        beneficios: [
            'Diminuição da circunferência abdominal, de até <strong>12cm</strong>',
            'Controle da ansiedade',
            'Correção da diástase abdominal;',
            'Diminuição do escape (incontinência) urinária;',
            'Melhora na relação sexual;',
            'Melhora na função intestina'
        ]
    },
    {
        id: '5dfhfs#d',
        name: 'LPF',
        icon: lpfIcon,
        descricao: 'LPF, também chamado de "barriga negativa", é um método de exercícios que utiliza técnicas de respiração e posturas inspiradas no RPG para fortalecer o abdômen com baixa pressão.',
        beneficios: [
            'Diminuição da circunferência abdominal, de até <strong>12cm</strong>',
            'Controle da ansiedade',
            'Correção da diástase abdominal;',
            'Diminuição do escape (incontinência) urinária;',
            'Melhora na relação sexual;',
            'Melhora na função intestina'
        ]
    },
    {
        id: '#ufjd5',
        name: 'Pilates',
        icon: pilatesIcon,
        tabs: [
            {
            title: 'Pilates',
            subtitle: 'Pilates é para todos',
            description:
                'Sem restrições de idade, o Pilates é acessível para todos. É uma ótima maneira de aprimorar sua qualidade de vida',
            benefits: [
                'Atua na conscientização postural, concentração, equilíbrio',
                'Melhora a disposição, fortalecimento e resistência muscular',
                'Diminui dores pelo corpo, diminui o estresse',
                'Ajuda no Condicionamento Físico e Respiratório',
                'Melhora na qualidade do sono',
                'Previne problemas musculoesqueléticas'
            ],
            },
            {
            title: 'Gestante',
            subtitle: 'Pilates para gestante',
            description:
                'Durante a gestação, o Pilates é um grande aliado para amenizar as mudanças estruturais e preparar o corpo para o parto.',
            benefits: [
                'Preparar o corpo da mulher do começo ao fim da gestação',
                'Melhorar a qualidade do sono',
                'Proporcionar diminuição das dores recorrentes devido a gestação',
                'Elimina Toxinas e Facilitar a Drenagem Linfática',
                'Melhorar a Respiração',
                'Equilíbrio do Peso Corporal'
            ],
            },
            {
            title: 'Idosos',
            subtitle: 'Pilates para idosos',
            description:
                'O Pilates para idosos é importante para melhorar a flexibilidade, equilíbrio e força, promovendo uma vida ativa e saudável na terceira idade.',
            benefits: [
                'Diminuição do risco de quedas',
                'Melhora no bem estar e na qualidade de vida.',
                'Diminuição nas dores em gerais',
                'Aumento da densidade mineral óssea',
                'Aumento da autoconfiança para se locomover',
                'Melhora na qualidade do sono',
            ],
            },
            {
            title: 'Kids',
            subtitle: 'Pilates para crianças',
            description:
                'O pilates desde cedo ajuda a prevenir doenças relacionadas a obesidade e sedentarismo',
            benefits: [
                'Evita doenças geradas pelo crescimento e sedentarismo',
                'Melhora da Atenção e Concentração',
                'Melhora da Coordenação Motora, Força Muscular e Equilíbrio',
                'Alongamento Muscular e Relaxamento',
                'Melhora da Consciencia Corporal e Propriocepção',
            ],
            },
        ]
    },
    {
      id: '98jsujhdhs4hd$msd7',
      name: 'Treinamento funcional',
      icon: treiIcon,
      descricao: 'O treinamento funcional é um método de exercícios que visa desenvolver a força, a estabilidade e a mobilidade do corpo, por meio de movimentos que replicam as atividades diárias e melhoram o desempenho funcional em diferentes contextos.',
      beneficios: [
        'Melhora da funcionalidade',
        'Fortalecimento do corpo como um todo',
        'Aumento da estabilidade e equilíbrio',
        'Melhora da coordenação e agilidade',
        'Aumento do condicionamento físico',
      ]
    },
    {
      id: '#da6gxdap6sd',
      name: 'Fisioterapia',
      icon: fisioIcon,
      descricao: 'A fisioterapia é uma área da saúde que trata de problemas de movimento e função do corpo. Fisioterapeutas ajudam as pessoas a se recuperar de lesões, aliviar a dor e melhorar a mobilidade. Eles usam exercícios e técnicas terapêuticas para ajudar os pacientes a se sentirem melhor e terem uma vida mais saudável. O objetivo é melhorar a qualidade de vida e a independência das pessoas.',
      beneficios: [
        'Recuperação de lesões',
        'Alívio da dor',
        'Melhora da mobilidade e função',
        'Prevenção de lesões',
        'Melhora da saúde respiratória',
      ]
    },
]

const Services = () => {
    return (
        <section className="services section" id='services'>
            <h2 className="section__title services__title">Serviços</h2>

            <div className="services__container container grid">
                <Card services={services} />
            </div>
        </section>
    )
}

export default Services
