/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { PureComponent } from 'react';

class ImageComponent extends PureComponent {

  render() {
    return(
    <div className="Image-container">
      <img src={this.props.image} className="Image" alt='image' />
    </div>
    )
  }
}

export default ImageComponent;
