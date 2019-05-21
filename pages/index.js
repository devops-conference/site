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

const { publicRuntimeConfig } = getConfig()
const { BACKEND_URL } = publicRuntimeConfig

class Index extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Head>
                    <title>{site.title}</title>
                </Head>
                <Header />
                <Section title={<img className="logo" src={`${BACKEND_URL}${site.logo}`} />}
                    backgroundImage={`url('${BACKEND_URL}/static/img/section-background/devops-background.png')`}
                    backdrop alignCenter firstSection>
                    <Calendar dateStartEvent={site.dateEventStart} dateFinishEvent={site.dateEventFinish}/>
                    <br/>
                    <a className="button large" href="#inscription">Inscreva-se</a>
                </Section>
                <Section title={site.about.title} alignCenter firstSection>
                    <br /><br />
                    <p>
                        Contéudo sobre o evento
                    </p>
                </Section>
                <Section title="Palestrantes" backgroundImage={`url('${BACKEND_URL}/static/img/section-background/dark-background.png')`} backdrop alignCenter firstSection>
                    <p>
                        Contéudo com os palestrantes
                    </p>
                </Section>
                <MiniSection title="Inscrições" id="inscription" alignCenter>
                    <br/><br/>
                    <div>
                        <p>As inscrições estão disponíveis no período de 00/00/0000 a 00/00/0000</p>
                        <p>É necessário um 1kg de alimento para ter acesso ao evento que será doado!</p><br/>
                        <br/>
                        <a className="button large" target="http://google.com" target="_blank">Link de inscrição</a>
                    </div>
                </MiniSection>
                <MiniSection alignCenter backgroundImage={`url('${BACKEND_URL}/static/img/section-background/dark-background.png')`}>
                    <ScrollAnimation animateIn="pulse" duration={2}><img src={`${BACKEND_URL}/static/img/icons/twitter-white.png`} alt="twitter"/><br/></ScrollAnimation>
                    <h1 className="follow-twitter"><a href={`https://twitter.com/search?q=%23${site.hashTag}`} target="_blank">
                            <AnimatedText text={site.hashTag} className="text-styled"/>
                        </a>
                    </h1>
                </MiniSection>
                <Footer />
            </React.Fragment>
        )
    }
} 


export default Index