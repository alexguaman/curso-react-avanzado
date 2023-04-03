import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    overflow: scroll;
    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }
    width: 100%;
`;

export const Item = styled.ul`
    padding: 0 8px;
`;