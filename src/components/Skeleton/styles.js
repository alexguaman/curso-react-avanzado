import styled, { keyframes } from "styled-components";

const sliding = keyframes`
        from {
            background-position: -10px 0, 0 0, 0 15px, 30px 50px;
        }
        to {
            background-position: 50px 0, 0 0, 0 15px, 30px 50px;
        }
    `;

export const ItemSkeleton = styled.img`    
    border: 1px solid #ddd;
    box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;
    height: 75px;
    width: 75px;
    background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 28%,
            rgb(191, 191, 191) 60%,
            rgba(255, 255, 255, 0) 79%
        ),
        linear-gradient(to bottom, #fafbff, #fafbff);
    background-repeat: no-repeat;
    animation: ${sliding} 0.5s linear infinite;
`;
