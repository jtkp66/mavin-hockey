const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1801/4725/files/IMG_1572_500x.jpg?v=1550876273",
      id: 1,
      linkUrl: "shop/hats"
    },
    {
      title: "apparel",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      linkUrl: "shop/apparel"
    },
    {
      title: "custom jerseys",
      imageUrl:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2c0fa765528065.5af772a0b30b3.png",
      id: 3,
      linkUrl: "shop/sneakers"
    },
    {
      title: "sticks",
      imageUrl:
        "https://s3.amazonaws.com/rsportz-production/file_assets/attachments/000/000/607/original/adult-hockey-james-sandkuhl.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/womens"
    },
    {
      title: "Protective Gear",
      imageUrl:
        "https://scontent-lga3-1.cdninstagram.com/vp/8db877c40fa3f2fd511443a2e4cb281c/5DCB10C2/t51.2885-15/sh0.08/e35/c162.0.720.720/s640x640/58410453_368931773832845_8231276497642590658_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com",
      size: "large",
      id: 5,
      linkUrl: "shop/mens"
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
