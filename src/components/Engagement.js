import React, { PureComponent } from 'react';

class Engagement extends PureComponent {

  render() {
    return(
      <div className="Engagement">
        <img src={this.props.icon} className="Icons" alt='icon1'/>
        <h6 className="Engagement-text">
          {this.props.value}
        </h6>
      </div>
    )
  }
}

export default Engagement;
