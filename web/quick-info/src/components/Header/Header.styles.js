import styled from "styled-components";


export const Wrapper = styled.div`
    padding: 0 20px;    
`;

export const Content = styled.div`

    height: 8em;
    text-align: center;
    padding: 15px;

    @media (min-width: 730px) {
        display: flex;
        align_items: center;
        justify-content: space-between;
        max-width: 1280px;
        padding: 31px 0;
      }
`;

export const LogoImg = styled.img`
    width: 35%;
    margin: 15px ;

    @media (min-width: 730px) {
        width: 17%;
        margin: 15px;
      
      }   
`;
