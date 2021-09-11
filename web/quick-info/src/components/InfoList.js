import React from 'react'

function InfoList(props) {
    return (
        <div>
            {props.Info && props.Info.map(info=> {
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

export default InfoList

