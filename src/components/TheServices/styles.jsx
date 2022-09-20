import styled from "styled-components"

export const TheServicesComponent = styled.div `
    margin-top: 4%;
    .services {
        margin-top: 5%;
        display: flex;
        width: 100%;
        gap: 1%;
        justify-content: left;
    }
    h1 {
        font-size: 32px;
        color: var(--Primary-colour);
        font-weight: 600;
    }
        .services-title-white {
        font-weight: 600;
        font-size: 24px;
        line-height: 36px;
        color: var(--White);

    }
    p {
        padding: 5% 10%;
    }
    img {
        width: 68px;
    }
    .services>div{
        width: 100%;
        padding: 3% 1%;
        border: 2px solid var(--Primary-colour);
        border-radius: 16px;
        align-items: center;
        text-align: center;
        justify-content: center;
    }
    .box-white{
        border: 2px solid #fff!important;
    }
    .box-white>h1 {
        color: var(--Primary-colour);
    }
    .two {
        margin-top: 1%;
    }
`