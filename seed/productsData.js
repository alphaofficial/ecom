const productsData = [
  {
    name: "Nike Air Max",
    category: "sneakers",
    price: 29.4,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
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
    },
  },
  {
    name: "Nike Runner 4000",
    category: "sneakers",
    price: 68.19,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
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
  },
  {
    name: "Nike Air Force",
    category: "sneakers",
    price: 24.18,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1524532787116-e70228437bbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      alt: "nike air force",
    },
    bestseller: false,
    featured: true,
    details: {
      dimensions: {
        width: 1020,
        height: 1020,
      },
      size: 1020,
      description:
        "sit dolor minim adipisicing ad non officia aliquip esse Lorem Lorem velit laboris do in duis labore tempor enim voluptate",
    },
  },
  {
    name: "Jordan 4 Retro",
    category: "sneakers",
    price: 9.62,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1542219550-37153d387c27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      alt: "jordan 4 retro",
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
        "magna excepteur ullamco esse exercitation ipsum magna do ex irure consequat culpa nostrud sit irure adipisicing consectetur aliqua esse qui",
    },
  },
  {
    name: "Ray ban 403",
    category: "fashion",
    price: 89.78,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
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
  },
  {
    name: "Dior Homme",
    category: "fashion",
    price: 48.53,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1522125123931-9304d91a42ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
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
  },
  {
    name: "Armani Junior",
    category: "fahsion",
    price: 69.96,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1523754865311-b886113bb8de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
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
  },
  {
    name: "Dolce & Gabbana",
    category: "fashion",
    price: 6.57,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
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
  },
  {
    name: "Nancy's",
    category: "food",
    price: 79.51,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80",
      alt: "nancy's",
    },
    bestseller: false,
    featured: true,
    details: {
      dimensions: {
        width: 1020,
        height: 1020,
      },
      size: 1020,
      description:
        "commodo anim do duis commodo sit id id nostrud sunt ad nisi qui commodo id ipsum officia amet est magna",
    },
  },
  {
    name: "Wendy's",
    category: "food",
    price: 60.51,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
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
  },
  {
    name: "KFC",
    category: "food",
    price: 52.21,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1599785209796-786432b228bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
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
  },
  {
    name: "Burger King",
    category: "food",
    price: 37.03,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1546393009-ef37dc6dfd35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
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
  },
  {
    name: "XBox 360",
    category: "games",
    price: 43.79,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      alt: "xbox 360",
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
        "incididunt sit est et ea culpa amet pariatur quis enim in irure elit officia do magna magna reprehenderit qui mollit",
    },
  },
  {
    name: "Playstation 4",
    category: "games",
    price: 79.73,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1590845947376-2638caa89309?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      alt: "playstaion 4",
    },
    bestseller: false,
    featured: true,
    details: {
      dimensions: {
        width: 1020,
        height: 1020,
      },
      size: 1020,
      description:
        "commodo ipsum excepteur cillum pariatur proident officia non sint irure deserunt eiusmod sunt ullamco Lorem ullamco quis Lorem ea eiusmod",
    },
  },
  {
    name: "Playstation 3",
    category: "games",
    price: 68.24,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1580327344181-c1163234e5a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      alt: "playstation 3",
    },
    bestseller: false,
    featured: true,
    details: {
      dimensions: {
        width: 1020,
        height: 1020,
      },
      size: 1020,
      description:
        "anim proident ut eiusmod quis amet veniam deserunt tempor est pariatur anim ut est duis sint anim laboris duis exercitation",
    },
  },
  {
    name: "Nintendo Switch",
    category: "games",
    price: 49.27,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1593118247619-e2d6f056869e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
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
  },
  {
    name: "Facial Foundation",
    category: "lifestyle",
    price: 53.68,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
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
  },
  {
    name: "Lifestyle Bencher",
    category: "lifestyle",
    price: 33.33,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1556229010-aa3f7ff66b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
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
  },
  {
    name: "Velvet Scarf",
    category: "lifestyle",
    price: 56.67,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      alt: "velvel scarf",
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
        "est anim magna eu Lorem et deserunt ipsum incididunt sunt anim qui et ut eu excepteur nostrud in pariatur qui",
    },
  },
  {
    name: "Lifestyle Front",
    category: "lifestyle",
    price: 22.11,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
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
  },
];

module.exports = productsData;
