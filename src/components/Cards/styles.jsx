import styled from "styled-components"

export const CardsComponent = styled.div `
    display: flex;
    gap: 2.5%;
    .Primary {
        padding-top: 10.5%;
        margin: 0%;
        background: var(--Primary-colour);
    }
    div {
        background-color: #BDBDBD;
        width: 25%;
        padding: 10% 2% 1%;
    }
    h1,h2 {
        line-height: 36px;
        font-weight: 600;
        font-size: 1.4vw;
        color: var(--White);
    }
    .Primary>h1 {
        line-height: 36px;
        font-weight: 600;
        font-size: 1.4vw;
        color: var(--White);
    }
`