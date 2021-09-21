import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: whitesmoke;
  height: 150px;
  padding: 0 35px;
  
`;

export const Content = styled.div`
  position: relative;
  max-width: 1280px;
  width: 60%;
  height: 48px;
  background: whitesmoke;
  margin: 0 auto;
  border-radius: 15px;
  color: #2196F3;
  border: 2px solid #2196F3;
  border-radius: 7px;

  img {
    position: absolute;
    right: 16px;
    top: 7px;
    width: 34px;
  }
  input {
    font-size: 21px;
    postion: absolute;
    left: 0;
    margin: 6px 4px;
    padding: 0 0 8px 10px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 40px;
    color: rgb(22, 20, 20);
    

    :focus {
      outline: none;
    }
  }
`;



