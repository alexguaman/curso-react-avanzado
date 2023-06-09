import styled, { css } from "styled-components";

export const List = styled.ul`
    display: flex;
    overflow: scroll;
    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }
    width: 100%;
    margin-bottom: 20px;

    ${(props) =>
        props.fixed &&
        css`
             {
                background: #fff;
                border-radius: 60px;
                box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
                left: 0;
                margin: 0 auto;
                max-width: 400px;
                padding: 5px;
                position: fixed;
                right: 0;
                top: -20px;
                transform: scale(0.5);
                z-index: 1;
            }
        `}
`;

export const Item = styled.ul`
    padding: 0 8px;
`;
