import Head from 'next/head'
import ScrollAnimation from 'react-animate-on-scroll'
import Section from '../components/section'
import MiniSection from './../components/mini-section'
import Calendar from '../components/calendar'
import Header from './../components/header'
import Footer from '../components/footer'
import AnimatedText from '../components/animated-text'

import site from '../utils/config'

class Index extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Head>
                    <title>{site.title}</title>
                </Head>
                <Header />
                <Section title={<img className="logo" src={site.logo} />}
                    backgroundImage={`url('/static/img/section-background/devops-background.png')`}
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
                <Section title="Palestrantes" backgroundImage={`url('/static/img/section-background/dark-background.png')`} backdrop alignCenter firstSection>
                    <p>
                        Contéudo com os palestrantes
                    </p>
                </Section>
                <MiniSection title="Inscrições" id="inscription" alignCenter>
                    <br/><br/>
                    <div align="left" style={{ width: '100vh'}}>
                        <ul>
                            <li style={{ marginBottom: 15}}><h3>Período das inscrições: </h3></li>
                            <li style={{ marginBottom: 15}}><h3>Link da inscrição: asoidjaosjd</h3></li>
                        </ul>
                    </div>
                </MiniSection>
                <MiniSection alignCenter backgroundImage={`url('/static/img/section-background/dark-background.png')`}>
                    <ScrollAnimation animateIn="pulse" duration={2}><img src="/static/img/icons/twitter-white.png" alt="twitter"/><br/></ScrollAnimation>
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