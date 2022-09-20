import styled from "styled-components"

export const AboutContainer = styled.div ` 
    width: 100%;
    h1 {
        font-size: 32px;
        color: var(--Primary-colour);
        font-weight: 600;
    }
    .experience {
        align-items: center;
        display: flex;
        margin: 2% 0%;
    }
    span {
        margin-right: 3%;
        font-size: 96px;
        font-weight: 600;
        color: var(--Primary-colour);
    }
    .experience>p {
        font-size: 24px;
        font-weight: 500;
    }
`