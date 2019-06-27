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
                    <p>17 de agosto de 2019 - Auditório Ariano Suassuna - TCE</p>
                    <Calendar dateStartEvent={site.dateEventStart} dateFinishEvent={site.dateEventFinish}/>
                    
                    <br/>
                    <a className="button large" href="#inscription">Inscreva-se</a>
                </Section>
                <Section title={site.about.title} alignCenter firstSection>
                    <br/><br/>
                    <div className="descr-font">
                    <p>
                        DevOps é um dos conceitos mais discutidos do momento e trata-se de uma cultura que nasceu como
                        um conjunto de práticas para integração entre as equipes de desenvolvimento de softwares,
                        operações (infraestrutura ou sysadmin) e de apoio envolvidas (como controle de qualidade) e a
                        adoção de processos automatizados para produção rápida e segura de aplicações e serviços.
                        Venha conhecer nesta conferência diversas ferramentas, casos de sucesso e dicas práticas de como
                        DevOps pode lhe ajudar e ser aplicado na sua carreira e empresa.
                    </p>
                    <br/>
                    <p>
                        O evento está no seu primeiro ano e tem como objetivo fomentar a cultura de colaboração
                        entre as equipes de desenvolvimento e de operação implementando uma cultura ágil voltada para o negócio.
                        Venha conhecer como aplicar o DevOps dentro da sua rotina diária, com palestras sobre os temas mais atuais
                        do mercado, contado com experiência e cases de sucesso que as empresas têm adotado. Essa é uma excelente
                        oportunidade para alunos, comunidade técnica, profissionais técnicos, gestores e diretores conhecerem a
                        cultura através de palestras a nível nacional.
                    </p>
                    </div>

                </Section>
                <Section title="Palestrantes"
                         backgroundImage={`url('${BACKEND_URL}/static/img/section-background/dark-background.png')`}
                         backdrop alignCenter firstSection>
                   
                    <br></br>
                    <br></br>

                    {/* <div className="titulos">

                    <p> A Cultura DevOps e sua importância</p>

                    <p> IaaC Infraestructure as a Code</p>

                    <p> Apache Kafka</p>

                    <div><p> Integração e Entrega Contínua</p>
                    <p> com Jenkins, Git, Docker e Terraform</p></div>

                    </div> */}

                    <br></br>

                    <div className="palestrantes">
                        
                    <img src={`${BACKEND_URL}/static/img/k.jpeg`} alt="kevin"/>
                    {/*<p> Kevin Medeiros - DevOps Engeener</p>*/}

                    <img src={`${BACKEND_URL}/static/img/victor.jpeg`} alt="victor"/>

                    <img src={`${BACKEND_URL}/static/img/ramon.jpeg`} alt="ramon"/>

                    <img src={`${BACKEND_URL}/static/img/aecio.jpeg`} alt="aecio"/>

                    </div>

                    <br></br>

                    <div className="titulos">
    
                    <div><p> Kevin Medeiros </p>
                    <p> DevOps Engineer na Anchor</p></div>

                    <div><p>Luiz Thiago </p> 
                    <p>DevOps Engineer na Reliant Solutions</p></div>

                    <div><p>Ramon Souza </p>
                    <p>Especilista de TI na Conductor</p></div>

                    <div><p>Aecio Pires</p>
                        <p>Analista de Suporte na Unirede</p></div>
                    
                    </div>
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
                    <br/>
                    <br/>
                    <div className="tce">
                        <img src={`${BACKEND_URL}/static/img/logo1.png`} align={"center"} alt="TCE"/>
                        <img src={`${BACKEND_URL}/static/img/logo2.png`} align={"left"} alt="VAT"/>
                    </div>
                    <br/>
                    <div className="patrocinio">
                        <div><p>Tribula de Contas</p>
                            <p>do Estado da Paraíba</p></div>

                        <p>VAT60 - podcast de tecnologia</p>
                    </div>
                    {/*<div className="vat">
                        <img src={`${BACKEND_URL}/static/img/v.png`} align={"left"} alt="VAT"/><br/>
                    </div>*/}

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
                    <div className="social">
                    <ScrollAnimation animateIn="pulse" duration={2}> <img src={`${BACKEND_URL}/static/img/icons/instagram_white.png`} href={`https://www.instagram.com/${site.hashTag}`} target="_blank" alt="instagram"/><br/></ScrollAnimation>
                    <ScrollAnimation animateIn="pulse" duration={2}> <img src={`${BACKEND_URL}/static/img/icons/facebook_white.png`} alt="facebook"/><br/></ScrollAnimation>
                    <ScrollAnimation animateIn="pulse" duration={2}> <img src={`${BACKEND_URL}/static/img/icons/twitter-white.png`} alt="twitter"/><br/></ScrollAnimation>
                    </div>
                    <h1 className="follow-twitter" align={"left"}> <a href={`https://www.instagram.com/${site.hashTag}`} target="_blank">
                        <AnimatedText text={'@' + site.hashTag} className="text-styled"/> </a>
                    </h1>
                    <br/>
                </MiniSection>
                <MiniSection>
                    <br/>
                    <div className="maps">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15835.896147127442!2d-34.87990134556883!3d-7.128999696264386!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc1629016d1091cb1!2sCentro+Cultural+Ariano+Suassuna!5e0!3m2!1spt-BR!2sbr!4v1560875453071!5m2!1spt-BR!2sbr"
                        />
                        <img src={`${BACKEND_URL}/static/img/f.jpg`} alt="ariano suassuna"/>
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