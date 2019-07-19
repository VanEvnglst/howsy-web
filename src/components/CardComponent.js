import React, { Component, Fragment } from 'react';
import Images from '../assets/constants/Images';
import Engagement from './Engagement';
import Image from './ImageComponent';
import UserProfile from './UserProfile';
import './cardStyles.css'

class CardComponent extends Component {

  render() {
    return(
      <div className="Content">
        <div className="Card-container">
          <Image image={this.props.data.url} />
          <div className="Engagement-container">
            <Engagement icon={Images.views} value={this.props.data.views}/>
            <Engagement icon={Images.comments} value={this.props.data.comments}/>
            <Engagement icon={Images.favorite} value={this.props.data.likes}/>
          </div>
        </div>
        <UserProfile thumbnail={this.props.data.thumbnailUrl} title={this.props.data.title}/>
      </div>
    );
  }
}

export default CardComponent;
