import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl:
            "https://images.sidelineswap.com/production/003/534/704/dca050c89fd76f7b_small.jpeg",
          id: 1
        },
        {
          title: "jackets",
          imageUrl:
            "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d384e965528065.5af772a0b2b68.png",
          id: 2
        },
        {
          title: "sneakers",
          imageUrl:
            "https://s3.amazonaws.com/rsportz-production/file_assets/attachments/000/000/607/original/adult-hockey-james-sandkuhl.jpg",
          id: 3
        },
        {
          title: "womens",
          imageUrl:
            "https://scontent-lga3-1.cdninstagram.com/vp/8db877c40fa3f2fd511443a2e4cb281c/5DCB10C2/t51.2885-15/sh0.08/e35/c162.0.720.720/s640x640/58410453_368931773832845_8231276497642590658_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com",
          size: "large",
          id: 4
        },
        {
          title: "mens",
          imageUrl: "https://pbs.twimg.com/media/DhHioFUVAAA18CD.jpg",
          size: "large",
          id: 5
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
