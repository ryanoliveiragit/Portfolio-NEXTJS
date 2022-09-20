import styled from "styled-components";

const Buttons = styled.button`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 12px 25px;
    background: #7562E0;
    border-radius: 8px;
    margin-top: 3%;
    color: var(--white);
    font-weight: 600;
    font-size: 16px;
    &.projects {
        background-color: transparent;
        border: 2px solid #7562E0;
    }
`;

export default Buttons;