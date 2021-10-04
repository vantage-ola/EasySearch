import styled from "styled-components";


export const Wrapper = styled.div`
    padding: 0 20px;
    background-color: var(--blueblack);
    
    @media (min-width: 730px) {
        padding: 0 100px;
    }
`;

export const Content = styled.div`

    height: 6em;
    text-align: center;
    padding: 15px;

    @media (min-width: 730px) {
       height: 8em;
        display: flex;
        align_items: center;
        justify-content: space-between;
        max-width: 1280px;
        padding: 31px 0;
      }
`;

export const LogoImg = styled.img`

    width: 17%;
    margin: 15px;

    @media (max-width: 730px) {
        width: 35%;
        margin: 0 100px;   
      
      }   
`;

export const NavButton = styled.input`
    height: 50px;
    margin: 15px;
    
    @media (max-width: 730px) {

      }
`;
