import Head from 'next/head'
import getConfig from 'next/config'
import ScrollAnimation from 'react-animate-on-scroll'

import Section from './../components/section'
import MiniSection from './../components/mini-section'
import Calendar from './../components/calendar'
import Header from './../components/header'
import Footer from './../components/footer'
import AnimatedText from './../components/animated-text'

import site from './../utils/config'

const {publicRuntimeConfig} = getConfig()
const {BACKEND_URL} = publicRuntimeConfig

class Index extends React.Component {
//title={<img className="logo" src={`${BACKEND_URL}${site.logo}`} />}
    render() {
        return (
            <React.Fragment>
                <Head>
                    <title>{site.title}</title>
                </Head>
                <Header/>
                <Section title={<img className="logo" src={`${BACKEND_URL}${site.logo}`}/>}
                         backgroundImage={`url('${BACKEND_URL}/static/img/section-background/black.jpg')`}
                         backdrop alignCenter firstSection>
                    <Calendar dateStartEvent={site.dateEventStart} dateFinishEvent={site.dateEventFinish}/>
                    <br/>
                    <a className="button large" href="#inscription">Inscreva-se</a>
                </Section>
                <Section title={site.about.title} alignCenter firstSection>
                    <br/><br/>
                    <p>
                        DevOps é um dos conceitos mais discutidos do momento e trata-se de uma cultura que nasceu como
                        um conjunto de práticas para integração entre as equipes de desenvolvimento de softwares,
                        operações (infraestrutura ou sysadmin) e de apoio envolvidas (como controle de qualidade) e a
                        adoção de processos automatizados para produção rápida e segura de aplicações e serviços.
                        Venha conhecer nesta conferência diversas ferramentas, casos de sucesso e dicas práticas de como
                        DevOps pode lhe ajudar e ser aplicado na sua carreira e empresa.

                    </p>

                </Section>
                <Section title="Palestrantes"
                         backgroundImage={`url('${BACKEND_URL}/static/img/section-background/dark-background.png')`}
                         backdrop alignCenter firstSection>
                    <p>
                        Contéudo com os palestrantes
                    </p>
                </Section>
                <MiniSection title="Programação">
                    <br/>
                    <div>
                        <ul>
                            {site.programacao.map(p => {
                                return <li>{`${p.horario} - ${p.nome}`}</li>
                            })}
                        </ul>
                    </div>
                    <br/>
                </MiniSection>

                <Section title="Patrocinadores"
                         backgroundImage={`url('${BACKEND_URL}/static/img/section-background/dark-background.png')`}
                         backdrop alignCenter firstSection>

                </Section>
                <MiniSection title="Inscrições" id="inscription" alignCenter>
                    <br/><br/>
                    <div>
                        <p>As inscrições estão disponíveis no período de 17/06/2019 a 17/08/2019</p>
                        <p>É necessário um 1kg de alimento para ter acesso ao evento que será doado!</p><br/>
                        <br/>
                        <a className="button large" href="https://www.sympla.com.br/devops-conference__554372"
                           target="_blank">Link de inscrição</a>
                    </div>
                </MiniSection>
                <MiniSection alignCenter
                             backgroundImage={`url('${BACKEND_URL}/static/img/section-background/dark-background.png')`}>
                    <ScrollAnimation animateIn="pulse" duration={2}><img
                        src={`${BACKEND_URL}/static/img/icons/instagram_white.png`}
                        alt="instagram"/><br/></ScrollAnimation>
                    <h1 className="follow-twitter"><a href={`https://www.instagram.com/${site.hashTag}`}
                                                      target="_blank">
                        <AnimatedText text={'@' + site.hashTag} className="text-styled"/>
                    </a>
                    </h1>
                </MiniSection>
                <MiniSection>
                    <br/>
                    <div className="maps">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15835.896147127442!2d-34.87990134556883!3d-7.128999696264386!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc1629016d1091cb1!2sCentro+Cultural+Ariano+Suassuna!5e0!3m2!1spt-BR!2sbr!4v1560875453071!5m2!1spt-BR!2sbr"
                        />
                        <img src={`${BACKEND_URL}/static/img/ct.jpg`} alt="ariano suassuna"/>
                    </div>
                    <br/><br/>
                    <hr/>
                </MiniSection>
                <Footer/>
            </React.Fragment>
        )
    }
}


export default Index