import styled from "styled-components"

export const SectionContainer = styled.div`
    align-items: center;
    text-align: left;
    align-items: center;
    justify-content: center;
    margin-top: 4%;
    display: flex;
    .name {
        max-width: 60%;
    }
    .text>h2 {
        font-size: 32px;
        font-weight: 500;
    }
    .text>h1 {
        margin-bottom: 1%;
        font-size: 52px;
    }
    .text {
        font-size: 18px;
        max-width: 70%;
    }
    .img {
        align-items: center;
        text-align: center;
    }
    img {
        width: 100%;
    }
    .content {
        align-items: center;
        display: flex;
    }
    .buttons {
        gap: 25px;
        display: flex;
    }
`