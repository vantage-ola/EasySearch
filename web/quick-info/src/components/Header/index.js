//HEADER COMPONENT

import React from 'react';

// IMG
import SimpluixImg  from '../../img/SIMPLUIX-1.png';
import AddButton  from '../../img/add-icon.png';

// STYLES
import { Wrapper , Content , LogoImg , NavButton} from './Header.styles';

//COMPONENTS
import ToolTip from "../ToolTip/ToolTip";
const Header = () => (
    <Wrapper>
        <Content>
            <LogoImg src = {SimpluixImg} alt ='simpluix-logo'/>
            <ToolTip content="Add Info" direction="top"> 
                <NavButton type="image" src = {AddButton} readOnly></NavButton>
            </ToolTip>
        </Content>
    </Wrapper>
);

export default Header