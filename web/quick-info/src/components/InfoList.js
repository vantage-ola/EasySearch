import React, {useState} from 'react';

import { Wrapper, Content} from "./SearchBar";

import searchIcon from "../img/search-icon.png";


function InfoList(props) {

  const [searchTerm , setSearchTerm] = useState("");

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
  
    return (
        <div>
      <Wrapper>
        <Content>
          <input 
            type="text" 
            placeholder="Search.."
            onChange = {handleChange}
          />
          <img src = {searchIcon} alt='search-icon'/>
        </Content>
      </Wrapper>        
            {props.Info && props.Info.filter((info) => {
              if (searchTerm === "") {
                return info
              } else if (info
                .name
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
                info
                .location
                .toLowerCase()
                .includes(searchTerm.toLowerCase())) {
                return info
              }
            }).map(info=> {
        return (
          <div key = {info.id}>
            <div className ="card-group">
              <div className = "card">
                <div className = "card-body">
                  <h5 className = "card-title">{info.name}</h5>
                  <h6 className = "card-subtitle mb-2 text-muted">{info.location}</h6>
                  <p className = "card-text">{info.address}</p>
                  <a href = "tel:{info.phone_no}" className = "card-link">{info.phone_no}</a>
                  <a href = {info.url} className = "card-link">{info.url}</a>
                </div>
              </div>
              </div>
          </div>
        )
      })}
        </div>
    )
}

export default InfoList;

