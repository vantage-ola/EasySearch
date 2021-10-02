import styled from "styled-components";


export const Wrapper = styled.div`
    padding: 0 20px;
    background-color: var(--blueblack);
    
    @media (min-width: 730px) {
        padding: 0 100px;
    }
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

    width: 17%;
    margin: 15px;

    @media (max-width: 730px) {
        width: 35%;
        margin: 15px ;
      
      }   
`;

export const NavButton = styled.button`
    background-color: rgb(21,26,31);
    color: white;
    font-size: 20px;
    padding: 10px 30px;
    border: 2px solid var(--blue);
    border-radius: 5px ;
    margin: 10px 0px;
    cursor: pointer;
    
    :hover {
        opacity: 0.9;
      }
    
      @media (max-width: 730px) {
        width: 160px;
      }

`;
