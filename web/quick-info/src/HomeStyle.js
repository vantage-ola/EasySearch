import {createGlobalStyle} from "styled-components";

export const HomeStyle = createGlobalStyle`
    :root {
        --white: whitesmoke;
    }
    * {
        font-family: 'Montserrat';
        font-size: 17px;
        box-sizing: border-box;
    }

    body {
        background-color: var(--white);
        margin: 0;
    }
    .card-group {
        width: 80%;
        margin: 10px 10.5%;
        padding: 10px;
       }
       
    .card-body {
         border: 1px solid grey;
         border-radius: 4px;
    }
    

`;