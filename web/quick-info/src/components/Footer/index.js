import React from "react";

import { Wrapper } from "./Footer.styles";

const year = new Date().getFullYear()

export const Footer = () => {
    return <Wrapper><p>&copy;{year} Simpluix.All right reserved.</p></Wrapper>
};