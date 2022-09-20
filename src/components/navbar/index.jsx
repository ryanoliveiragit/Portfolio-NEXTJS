import React from "react";
import { Container, Content } from './styles'
import Buttons from '../buttons/styles'

const Sidebar = ({ active }) => {
    const closeSidebar = () => {
        active(false)
    }
    return (
        <Container sidebar={active}>
            <div
                className="button">
                <Buttons
                    onClick={closeSidebar}>menu
                </Buttons>
            </div>
            <Content>
                <nav className="sideBarNavigation">
                    <h1>Ryanvs</h1>
                    <ul className="sidebar">
                        <li>A Alquimia</li>
                        <li>Quem Joga Junto</li>
                        <li>Quem somos</li>
                        <li>Nossas Fórmulas</li>
                        <li>Transparência</li>
                        <li>Mutant</li>
                        <li>Fale conosco</li>
                    </ul>
                </nav>
            </Content>
        </Container>
    )
}
export default Sidebar