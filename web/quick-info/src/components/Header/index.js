//HEADER COMPONENT

import React from 'react';

// IMG
import SimpluixImg  from '../../img/SIMPLUIX-1.png';

// STYLES
import { Wrapper , Content , LogoImg , NavButton} from './Header.styles';

const Header = () => (
    <Wrapper>
        <Content>
            <LogoImg src = {SimpluixImg} alt ='simpluix-logo'/>
            <NavButton>Add Info</NavButton>
        </Content>
    </Wrapper>
);

export default Header