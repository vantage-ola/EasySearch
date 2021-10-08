import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: var(--blueblack);
  height: 150px;
  padding: 0 35px;
  
`;

export const Content = styled.div`
  position: relative;
  max-width: 1280px;
  width: 60%;
  height: 48px;
  margin: 0 auto;
  border-radius: 15px;
  color: var(--blue);
  border: 2px solid var(--blue);
  border-radius: 7px;

  img {
    position: absolute;
    right: 16px;
    top: 7px;
    width: 34px;
  }
  input {
    font-size: 21px;
    position: absolute;
    left: 0;
    margin: 6px 4px;
    padding: 0 0 8px 10px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 40px;
    color: white;
    

    :focus {
      outline: none;
    }
  }
`;



