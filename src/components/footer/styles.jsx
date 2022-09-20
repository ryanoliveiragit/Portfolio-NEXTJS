import styled from "styled-components";

export const FooterStyled = styled.footer`
  color: white;
  background-color: var(--Secondary-colour);
  display: flex;
  flex-direction: row;
  padding: 0%;
  margin-top: 5%;
  font-family: 'Roboto', sans-serif;
  .footer {

    display: flex;
  }
  p {
    margin-top: 7%;
  }
  h1 {
    font-size: 1.5rem;
  }
`
export const Content = styled.div `
    width: 50%;
    margin-left: 2%;
    ul {
        padding-right: 20vw;
        border-left: 1px solid #ffffff1d;
        border-right: 1px solid #ffffff1d;
        height: 100%;
    }
    li {
        width: 10vw;
        list-style: none;
        margin-bottom: 1em;
        cursor: pointer;
        transition: .4s;
    }
    li:hover {
      transition: .4s;
      color: var(--Primary-colour);
    }
`
export const MadeWith = styled.div `
    background-color: var(--Primary-colour);
    .footer-copy {
        justify-content: center;
        display: flex;
    }
    .footer-copy-items {
    display: flex;
    width: 100%;
    padding: .5% 5%;
    justify-content: center;
  }
  span {
        margin-left: .2em;
        margin-right: .2em;
    }
  a,p {
    font-family: 'Roboto', sans-serif;
    font-size: 0.76rem;
    margin-left: 8%;
    margin-right: 8%;
    color: var(--white);
    text-decoration: none;
  }
`