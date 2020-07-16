import React from 'react'

const Team = (props) => {
    return(
        <div>
            <img src={props.photo} alt=''></img>
            <p>{props.name}</p>
            <p>{props.title}</p>
        </div>
     
    )
}

export default Team;