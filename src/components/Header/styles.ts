import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;
    background: ${({theme})=> theme.colors["white"]};
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2);

    div{
        padding: 10px;
    }
`