import React,
{
    Fragment,
    useState
}
    from 'react'
import ContainerHeader from './styles'
import Buttons from '../buttons/styles'
import Sidebar from '../navbar'
import Layout from '../layout'

function Header() {
    const [sidebar, setSidebar] = useState(false)
    const showSiderbar = () => setSidebar(!sidebar)

    return (
        <Fragment>
            <ContainerHeader>
                <Layout>
                    <nav className='navigation'>
                        <h1>Ryanvs</h1>
                        <ul className='list'>
                            <li className='active'>Home</li>
                            <li>About me</li>
                            <li>Projects</li>
                            <li>Contact</li>
                        </ul>
                        <button
                            className='amburger'
                            onClick={showSiderbar}>menu
                        </button>
                        {sidebar &&
                            <Sidebar
                            active={setSidebar}
                        />}
                    </nav>
                </Layout>
            </ContainerHeader>
        </Fragment>
    )
}

export default Header;