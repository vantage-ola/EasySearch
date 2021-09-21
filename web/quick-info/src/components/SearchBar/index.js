import React, { useState, useEffect, useRef } from "react";

import { Wrapper, Content, Button, } from "./SearchBar.styles";

import searchIcon from "../../img/search-icon.png";

const SearchBar = ({ setSearchTerm }) => {
    const [state, setState] = useState('');

    return (
    <Wrapper>
     <Content>
       <input 
       type="text" 
       placeholder="Search.."
       onChange={event => setState(event.currentTarget.value)}
       value ={state}
       />
      <img src = {searchIcon} alt='search-icon'/>
     </Content>
    </Wrapper>
 );
}
export default SearchBar;