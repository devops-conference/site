import Link from 'next/link'
import Head from 'next/head'
import site from '../utils/config'

class Header extends React.Component {
    
    state = {
        scrolling: false
    }

    componentDidMount() {
        window.onscroll = () => this.handleScroll()
        this.handleScroll()
    }

    handleScroll() { 
        if (!this.state.scrolling && document.documentElement.scrollTop > 100) {
            this.setState({ ...this.state, scrolling: true })
        }
        
        if (this.state.scrolling && document.documentElement.scrollTop === 0) {
            this.setState({ ...this.state, scrolling: false })
        }
    }

    render() {

        return (
            <React.Fragment>
                <Head>
                    { !this.state.scrolling && <meta name="theme-color" content="#1D1D1D"/>}
                    { this.state.scrolling && <meta name="theme-color" content="#1D1D1D"/>}
                </Head>
                {
                    this.props.menus &&
                    <div className={`header ${this.state.scrolling && 'scrolling'}`}>
                        <div className={this.state.scrolling ? 'center': 'left'}>
                            {
                                this.state.scrolling &&
                                <Link href="/"><a><img src={site.menu.logos.scrolling} alt="logo-evento"/></a></Link>
                            }
                            {
                                !this.state.scrolling &&
                                <Link href="/"><a><img src={site.menu.logos.initial} alt="logo-evento"/></a></Link>
                            }
                        </div>
                    </div>
                }

            </React.Fragment>
        )
    }
}

Header.defaultProps = {
    menus: true
}

export default Header