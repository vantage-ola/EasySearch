import React from 'react'

function InfoList(props) {
    return (
        <div>
            {props.Info && props.Info.map(info=> {
        return (
          <div key = {info.id}> 
            <h2>{info.name}</h2>
            <h3>{info.location}</h3>
            <h3>{info.address}</h3>
            <h4>{info.phone_no}</h4>
            <h5>{info.url}</h5>
          </div> 

        )
      })}
        </div>
    )
}

export default InfoList

