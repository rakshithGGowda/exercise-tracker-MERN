import React from 'react' 
import {Link} from 'react-router-dom'

export default class Navbar extends React.Component {
    render(){
        return(<nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to='/'>MERN</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to='/'>Exercise <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/create'>Create Exercise log</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/users'>Create User</Link>
            </li>
          </ul>
        </div>
      </nav>)
    }
}