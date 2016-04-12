import React,{Component} from 'react';
import {Link, IndexLink} from 'react-router';

class Workspace extends Component {
  render() {
    return(
      <div>
        <nav>
          <IndexLink to="/">
            Home
          </IndexLink>
          {' '}
          <Link to="/counter">
            Counter
          </Link>
          {' '}
          <Link to="/comment">
            Comment App
          </Link>
        </nav>
        {
          this.props.children
        }
      </div>
    )
  }
}

export default Workspace;
