import React, { Component } from 'react';
import CardComponent from '../components/CardComponent';
import './list.css';
import Images from '../assets/constants/Images';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          "albumId": 1,
          "id": 1,
          "title": "accusamus beatae ad facilis cum similique qui sunt",
          "url": "https://via.placeholder.com/600/92c952",
          "thumbnailUrl": "https://via.placeholder.com/150/92c952",
          "likes": "556",
          "comments": "26",
          "views": "7,702",
          "icon": Images.views
        },
        {
          "albumId": 1,
          "id": 2,
          "title": "reprehenderit est deserunt velit ipsam",
          "url": "https://via.placeholder.com/600/771796",
          "thumbnailUrl": "https://via.placeholder.com/150/771796",
          "likes": "634",
          "comments": "38",
          "views": "8,172",
          "icon": Images.comments
        },
        {
          "albumId": 1,
          "id": 3,
          "title": "officia porro iure quia iusto qui ipsa ut modi",
          "url": "https://via.placeholder.com/600/24f355",
          "thumbnailUrl": "https://via.placeholder.com/150/24f355",
          "likes": "453",
          "comments": "14",
          "views": "4,831",
          "icon": Images.favorite
        },
      ]
    }
  }

  render() {
    return(
      <div className="List-screen">
        <div className="component">
          {this.state.data.map(data => {
            return (
              <CardComponent data={data} />
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default List;
