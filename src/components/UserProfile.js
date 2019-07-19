import React, { PureComponent } from 'react';

class UserProfile extends PureComponent {

  render() {
    return(
      <div className="User-profile">
        <img src={this.props.thumbnail} className="Profile" alt='profile' />
        <h5 className="Profile-name">
          {this.props.title}
        </h5>
        </div>
    )
  }
}

export default UserProfile;
