import {createGlobalStyle} from "styled-components";

export const HomeStyle = createGlobalStyle`
    :root {
        --white: whitesmoke;
        --blue: #2196F3;
        --blueblack: rgb(15, 18, 22)
    }
    * {
        color: var(--white);
        font-family: 'Montserrat';
        font-size: 17px;
        box-sizing: border-box;
    }

    body {
        background-color: var(--blueblack);
        margin: 0;
    }
    .card-group {
        width: 80%;
        margin: 10px 10.5%;
        padding: 10px;
       }
    .card {
        border: 2px solid var(--blue);
        border-radius: 4px;
    }
       
    .card-body {
        background-color: var(--blueblack);
    }
    

`;