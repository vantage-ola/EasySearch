//HEADER COMPONENT

import React from 'react';

// IMG
import SimpluixImg  from '../../img/SIMPLUIX-1.png';

// STYLES
import { Wrapper , Content , LogoImg } from './Header.styles';

const Header = () => (
    <Wrapper>
        <Content>
            <LogoImg src = {SimpluixImg} alt ='simpluix-logo'/>
        </Content>
    </Wrapper>
);

export default Header