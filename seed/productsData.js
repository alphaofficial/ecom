const productsData = [
  {
    name: "Nike Air Max",
    category: "sneakers",
    price: 29.4,
    currency: "USD",
    image: {
      src: "https://picsum.photos/id/1048/800/500",
      alt: "nike air max",
    },
    bestseller: true,
    featured: true,
    details: {
      dimensions: {
        width: 1020,
        height: 1020,
      },
      size: 1020,
      description:
        "magna ut aute deserunt id ea aliqua reprehenderit ex ipsum magna ex est id elit ipsum culpa do proident et",
      recommendations: [
        {
          src: "https://picsum.photos/id/1025/200/300",
          alt: "",
        },
        {
          src: "https://picsum.photos/id/1023/200/300",
          alt: "",
        },
        {
          src: "https://picsum.photos/id/1024/200/300",
          alt: "",
        },
      ],
    },
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
  },
  {
    name: "Nike Runner 4000",
    category: "sneakers",
    price: 68.19,
    currency: "USD",
    image: {
      src: "https://picsum.photos/id/1027/800/500",
      alt: "nike runner 4000",
    },
    bestseller: false,
    featured: false,
    details: {
      dimensions: {
        width: 1020,
        height: 1020,
      },
      size: 1020,
      description:
        "aliquip exercitation commodo qui cupidatat magna non occaecat amet labore nulla nulla laboris sunt enim voluptate aute voluptate adipisicing mollit",
    },
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
  },
  {
    name: "Nike Air Force",
    category: "sneakers",
    price: 24.18,
    currency: "USD",
    image: {
      src: "https://picsum.photos/id/1028/800/500",
      alt: "nike air force",
    },
    bestseller: false,
    featured: false,
    details: {
      dimensions: {
        width: 1020,
        height: 1020,
      },
      size: 1020,
      description:
        "sit dolor minim adipisicing ad non officia aliquip esse Lorem Lorem velit laboris do in duis labore tempor enim voluptate",
    },
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
  },
  {
    name: "Jordan 4 Retro",
    category: "sneakers",
    price: 9.62,
    currency: "USD",
    image: {
      src: "https://picsum.photos/id/1029/800/500",
      alt: "jordan 4 retro",
    },
    bestseller: true,
    featured: false,
    details: {
      dimensions: {
        width: 1020,
        height: 1020,
      },
      size: 1020,
      description:
        "magna excepteur ullamco esse exercitation ipsum magna do ex irure consequat culpa nostrud sit irure adipisicing consectetur aliqua esse qui",
    },
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
  },
  {
    name: "Ray ban 403",
    category: "fashion",
    price: 89.78,
    currency: "USD",
    image: {
      src: "https://picsum.photos/id/1049/800/500",
      alt: "ray ban 403",
    },
    bestseller: false,
    featured: false,
    details: {
      dimensions: {
        width: 1020,
        height: 1020,
      },
      size: 1020,
      description:
        "aute ut aute ut duis esse anim consequat ipsum in ea adipisicing nisi ut ullamco elit velit nisi non excepteur",
    },
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
  },
  {
    name: "Dior Homme",
    category: "fashion",
    price: 48.53,
    currency: "USD",
    image: {
      src: "https://picsum.photos/id/103/800/500",
      alt: "dior homme",
    },
    bestseller: true,
    featured: false,
    details: {
      dimensions: {
        width: 1020,
        height: 1020,
      },
      size: 1020,
      description:
        "id occaecat mollit enim ad deserunt magna Lorem excepteur eiusmod cillum deserunt labore laboris laboris est labore ea ex aute",
    },
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
  },
  {
    name: "Armani Junior",
    category: "fashion",
    price: 69.96,
    currency: "USD",
    image: {
      src: "https://picsum.photos/id/1031/800/500",
      alt: "armani junior",
    },
    bestseller: false,
    featured: false,
    details: {
      dimensions: {
        width: 1020,
        height: 1020,
      },
      size: 1020,
      description:
        "irure enim tempor nostrud proident ad enim non in nostrud ad tempor magna nulla dolore elit non reprehenderit est id",
    },
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
  },
  {
    name: "Dolce & Gabbana",
    category: "fashion",
    price: 6.57,
    currency: "USD",
    image: {
      src: "https://picsum.photos/id/1032/800/500",
      alt: "dolce & gabbana",
    },
    bestseller: false,
    featured: false,
    details: {
      dimensions: {
        width: 1020,
        height: 1020,
      },
      size: 1020,
      description:
        "exercitation qui non ex adipisicing eu nostrud do eiusmod esse do ex irure reprehenderit nulla tempor nulla duis anim esse",
    },
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
  },
  {
    name: "Nancy's",
    category: "food",
    price: 79.51,
    currency: "USD",
    image: {
      src: "https://picsum.photos/id/1027/1033/500",
      alt: "nancy's",
    },
    bestseller: false,
    featured: false,
    details: {
      dimensions: {
        width: 1020,
        height: 1020,
      },
      size: 1020,
      description:
        "commodo anim do duis commodo sit id id nostrud sunt ad nisi qui commodo id ipsum officia amet est magna",
    },
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
  },
  {
    name: "Wendy's",
    category: "food",
    price: 60.51,
    currency: "USD",
    image: {
      src: "https://picsum.photos/id/1035/800/500",
      alt: "wendy's",
    },
    bestseller: false,
    featured: false,
    details: {
      dimensions: {
        width: 1020,
        height: 1020,
      },
      size: 1020,
      description:
        "ea quis commodo cupidatat dolore eiusmod sit non fugiat et labore tempor elit fugiat officia aute eu aute nisi nulla",
    },
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
  },
  {
    name: "KFC",
    category: "food",
    price: 52.21,
    currency: "USD",
    image: {
      src: "https://picsum.photos/id/106/800/500",
      alt: "kfc",
    },
    bestseller: false,
    featured: false,
    details: {
      dimensions: {
        width: 1020,
        height: 1020,
      },
      size: 1020,
      description:
        "dolor nisi qui minim minim veniam amet elit officia pariatur exercitation mollit do pariatur consectetur officia officia labore amet culpa",
    },
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
  },
  {
    name: "Burger King",
    category: "food",
    price: 37.03,
    currency: "USD",
    image: {
      src: "https://picsum.photos/id/1037/800/500",
      alt: "burgar king",
    },
    bestseller: false,
    featured: false,
    details: {
      dimensions: {
        width: 1020,
        height: 1020,
      },
      size: 1020,
      description:
        "in nisi ad et ipsum enim ea minim ex fugiat elit reprehenderit culpa duis in reprehenderit nulla magna cupidatat nulla",
    },
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
  },
  {
    name: "XBox 360",
    category: "games",
    price: 43.79,
    currency: "USD",
    image: {
      src: "https://picsum.photos/id/1038/800/500",
      alt: "xbox 360",
    },
    bestseller: true,
    featured: false,
    details: {
      dimensions: {
        width: 1020,
        height: 1020,
      },
      size: 1020,
      description:
        "incididunt sit est et ea culpa amet pariatur quis enim in irure elit officia do magna magna reprehenderit qui mollit",
    },
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
  },
  {
    name: "Playstation 4",
    category: "games",
    price: 79.73,
    currency: "USD",
    image: {
      src: "https://picsum.photos/id/1039/800/500",
      alt: "playstaion 4",
    },
    bestseller: false,
    featured: false,
    details: {
      dimensions: {
        width: 1020,
        height: 1020,
      },
      size: 1020,
      description:
        "commodo ipsum excepteur cillum pariatur proident officia non sint irure deserunt eiusmod sunt ullamco Lorem ullamco quis Lorem ea eiusmod",
    },
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
  },
  {
    name: "Playstation 3",
    category: "games",
    price: 68.24,
    currency: "USD",
    image: {
      src: "https://picsum.photos/id/104/800/500",
      alt: "playstation 3",
    },
    bestseller: false,
    featured: false,
    details: {
      dimensions: {
        width: 1020,
        height: 1020,
      },
      size: 1020,
      description:
        "anim proident ut eiusmod quis amet veniam deserunt tempor est pariatur anim ut est duis sint anim laboris duis exercitation",
    },
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
  },
  {
    name: "Nintendo Switch",
    category: "games",
    price: 49.27,
    currency: "USD",
    image: {
      src: "https://picsum.photos/id/1041/800/500",
      alt: "nintendo switch",
    },
    bestseller: true,
    featured: false,
    details: {
      dimensions: {
        width: 1020,
        height: 1020,
      },
      size: 1020,
      description:
        "aute id nulla enim irure amet fugiat duis ad exercitation minim velit aliqua minim fugiat sunt adipisicing anim commodo nostrud",
    },
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
  },
  {
    name: "Facial Foundation",
    category: "lifestyle",
    price: 53.68,
    currency: "USD",
    image: {
      src: "https://picsum.photos/id/1042/800/500",
      alt: "facial foundation",
    },
    bestseller: true,
    featured: false,
    details: {
      dimensions: {
        width: 1020,
        height: 1020,
      },
      size: 1020,
      description:
        "Lorem cupidatat sit nulla sint ex magna magna ipsum consequat proident reprehenderit pariatur incididunt commodo enim eiusmod qui ut aliqua",
    },
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
  },
  {
    name: "Lifestyle Bencher",
    category: "lifestyle",
    price: 33.33,
    currency: "USD",
    image: {
      src: "https://picsum.photos/id/1043/800/500",
      alt: "lifestyle bencher",
    },
    bestseller: false,
    featured: false,
    details: {
      dimensions: {
        width: 1020,
        height: 1020,
      },
      size: 1020,
      description:
        "adipisicing ad excepteur anim deserunt eiusmod irure sit do est eu occaecat fugiat velit voluptate dolor nulla nostrud nostrud aute",
    },
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
  },
  {
    name: "Velvet Scarf",
    category: "lifestyle",
    price: 56.67,
    currency: "USD",
    image: {
      src: "https://picsum.photos/id/1044/800/500",
      alt: "velvel scarf",
    },
    bestseller: true,
    featured: false,
    details: {
      dimensions: {
        width: 1020,
        height: 1020,
      },
      size: 1020,
      description:
        "est anim magna eu Lorem et deserunt ipsum incididunt sunt anim qui et ut eu excepteur nostrud in pariatur qui",
    },
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
  },
  {
    name: "Lifestyle Front",
    category: "lifestyle",
    price: 22.11,
    currency: "USD",
    image: {
      src: "https://picsum.photos/id/1045/800/500",
      alt: "lifestyle front",
    },
    bestseller: false,
    featured: false,
    details: {
      dimensions: {
        width: 1020,
        height: 1020,
      },
      size: 1020,
      description:
        "consectetur id ex officia in cillum irure consectetur cillum aute id occaecat magna minim amet enim Lorem occaecat qui magna",
    },
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
  },
];

module.exports = productsData;
