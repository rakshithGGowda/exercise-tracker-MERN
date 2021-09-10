import React from 'react'
import {Link} from 'react-router-dom'

function Exercise(props) {
     return(
    <div>
        <h4>{props.data.username}</h4><br/>
        <span>{props.data.description}</span><br/>
        <span>{props.data.duration}</span><br/>
        <span>{props.data.date}</span><br/>
        <button onClick = {props.onDelete} > delete</button>
        <Link to= {'/edit/'+props.data._id} > edit</Link>
    </div>)
}

export default Exercise;