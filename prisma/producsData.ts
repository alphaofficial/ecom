import { IProduct } from "../types";

const images = [
  {
    type: "sneakers",
    src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  },

  {
    type: "sneakers",
    src: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },

  {
    type: "sneakers",
    src: "https://images.unsplash.com/photo-1524532787116-e70228437bbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },

  {
    type: "sneakers",
    src: "https://images.unsplash.com/photo-1542219550-37153d387c27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },

  {
    type: "fashion",
    src: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  },

  {
    type: "fashion",
    src: "https://images.unsplash.com/photo-1522125123931-9304d91a42ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    type: "fashion",
    src: "https://images.unsplash.com/photo-1523754865311-b886113bb8de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    type: "fashion",
    src: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
  },

  {
    type: "food",
    src: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80",
  },

  {
    type: "food",
    src: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    type: "food",
    src: "https://images.unsplash.com/photo-1599785209796-786432b228bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    type: "food",
    src: "https://images.unsplash.com/photo-1546393009-ef37dc6dfd35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
  },

  {
    type: "games",
    src: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  },
  {
    type: "games",
    src: "https://images.unsplash.com/photo-1590845947376-2638caa89309?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  },
  {
    type: "games",
    src: "https://images.unsplash.com/photo-1580327344181-c1163234e5a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    type: "games",
    src: "https://images.unsplash.com/photo-1593118247619-e2d6f056869e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },

  {
    type: "lifestyle",
    src: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    type: "lifestyle",
    src: "https://images.unsplash.com/photo-1556229010-aa3f7ff66b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    type: "lifestyle",
    src: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    type: "lifestyle",
    src: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
];
export const productsData: IProduct[] = [
  {
    name: "adipisicing eiusmod",
    category: "culpa",
    price: 29.4861,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80",
      alt: "officia irure",
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
    name: "anim aute",
    category: "sunt",
    price: 68.1949,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80",
      alt: "anim id",
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
    name: "consectetur et",
    category: "qui",
    price: 24.1833,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80",
      alt: "mollit enim",
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
    name: "minim culpa",
    category: "irure",
    price: 9.6266,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80",
      alt: "eu et",
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
    name: "aliquip Lorem",
    category: "aute",
    price: 89.7816,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80",
      alt: "mollit nulla",
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
        "aute ut aute ut duis esse anim consequat ipsum in ea adipisicing nisi ut ullamco elit velit nisi non excepteur",
    },
  },
  {
    name: "eu excepteur",
    category: "proident",
    price: 48.5773,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80",
      alt: "id laboris",
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
        "id occaecat mollit enim ad deserunt magna Lorem excepteur eiusmod cillum deserunt labore laboris laboris est labore ea ex aute",
    },
  },
  {
    name: "cupidatat anim",
    category: "ex",
    price: 69.9651,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80",
      alt: "tempor adipisicing",
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
    name: "proident eiusmod",
    category: "commodo",
    price: 6.5788,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80",
      alt: "nostrud commodo",
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
        "exercitation qui non ex adipisicing eu nostrud do eiusmod esse do ex irure reprehenderit nulla tempor nulla duis anim esse",
    },
  },
  {
    name: "eiusmod irure",
    category: "nisi",
    price: 79.5531,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80",
      alt: "irure ex",
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
    name: "sint nisi",
    category: "minim",
    price: 60.951,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80",
      alt: "dolore voluptate",
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
    name: "excepteur sint",
    category: "pariatur",
    price: 52.2781,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80",
      alt: "nulla commodo",
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
        "dolor nisi qui minim minim veniam amet elit officia pariatur exercitation mollit do pariatur consectetur officia officia labore amet culpa",
    },
  },
  {
    name: "minim duis",
    category: "nostrud",
    price: 37.0813,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80",
      alt: "irure qui",
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
    name: "incididunt qui",
    category: "minim",
    price: 43.7539,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80",
      alt: "proident qui",
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
    name: "cupidatat eu",
    category: "proident",
    price: 79.1473,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80",
      alt: "quis nisi",
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
    name: "non consectetur",
    category: "nulla",
    price: 68.284,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80",
      alt: "labore veniam",
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
    name: "cupidatat elit",
    category: "duis",
    price: 49.2427,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80",
      alt: "non eiusmod",
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
    name: "anim ipsum",
    category: "quis",
    price: 53.6268,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80",
      alt: "dolore ex",
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
        "Lorem cupidatat sit nulla sint ex magna magna ipsum consequat proident reprehenderit pariatur incididunt commodo enim eiusmod qui ut aliqua",
    },
  },
  {
    name: "laboris cillum",
    category: "sit",
    price: 33.3394,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80",
      alt: "esse esse",
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
        "adipisicing ad excepteur anim deserunt eiusmod irure sit do est eu occaecat fugiat velit voluptate dolor nulla nostrud nostrud aute",
    },
  },
  {
    name: "eu quis",
    category: "ipsum",
    price: 56.6677,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80",
      alt: "ex ut",
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
    name: "cillum ea",
    category: "commodo",
    price: 22.9111,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80",
      alt: "sunt sit",
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
  {
    name: "sit ullamco",
    category: "cillum",
    price: 72.133,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80",
      alt: "quis excepteur",
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
        "laboris et in minim labore pariatur fugiat duis quis consequat anim dolor cupidatat duis veniam aliquip ipsum quis in voluptate",
    },
  },
  {
    name: "mollit fugiat",
    category: "id",
    price: 75.8018,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80",
      alt: "cupidatat do",
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
        "ad ad cupidatat velit cupidatat cupidatat voluptate eiusmod ad cupidatat laboris incididunt sunt dolore occaecat ea voluptate enim enim sit",
    },
  },
  {
    name: "est est",
    category: "adipisicing",
    price: 44.1923,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80",
      alt: "Lorem ea",
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
        "aute incididunt est culpa exercitation officia ea proident ut dolore qui voluptate non nulla sint cillum elit id labore pariatur",
    },
  },
  {
    name: "ea veniam",
    category: "fugiat",
    price: 75.268,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80",
      alt: "consectetur sunt",
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
        "deserunt et minim amet qui occaecat deserunt ut aliqua pariatur aute velit eiusmod est esse et id fugiat voluptate consectetur",
    },
  },
  {
    name: "nostrud enim",
    category: "eu",
    price: 69.0334,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80",
      alt: "reprehenderit aliquip",
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
        "cupidatat ut ex exercitation occaecat nulla quis nostrud ipsum mollit labore nisi amet sint qui culpa amet voluptate mollit ex",
    },
  },
  {
    name: "Lorem ea",
    category: "elit",
    price: 87.5192,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80",
      alt: "ex ex",
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
        "nostrud sit mollit tempor elit eu aute sunt irure adipisicing enim amet anim tempor eu exercitation in magna est occaecat",
    },
  },
  {
    name: "ex velit",
    category: "velit",
    price: 35.2622,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80",
      alt: "minim dolor",
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
        "aliquip duis aliqua veniam qui occaecat qui voluptate ut elit incididunt enim ipsum elit culpa dolor dolor ut eiusmod labore",
    },
  },
  {
    name: "dolore amet",
    category: "magna",
    price: 37.055,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80",
      alt: "officia dolor",
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
        "ea nostrud pariatur dolor et excepteur excepteur qui mollit aliqua ea esse nisi Lorem do excepteur laborum consectetur laborum do",
    },
  },
  {
    name: "occaecat consectetur",
    category: "ex",
    price: 28.177,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80",
      alt: "est commodo",
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
        "excepteur sit duis aute non id ea elit pariatur occaecat ullamco non esse et eiusmod consequat enim ex velit esse",
    },
  },
  {
    name: "adipisicing veniam",
    category: "do",
    price: 52.3977,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80",
      alt: "irure minim",
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
        "est laboris nostrud est proident mollit cupidatat eiusmod consequat occaecat aute voluptate amet do quis ad officia sit ex nulla",
    },
  },
  {
    name: "esse excepteur",
    category: "id",
    price: 81.5276,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80",
      alt: "consequat nulla",
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
        "deserunt nulla aliqua qui exercitation eu ea ea dolore et sint sunt consectetur mollit nulla nostrud do consequat nisi laboris",
    },
  },
  {
    name: "duis culpa",
    category: "et",
    price: 18.9707,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80",
      alt: "fugiat incididunt",
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
        "voluptate ex pariatur officia ut quis cillum veniam irure id id minim et adipisicing ea consequat labore duis labore eu",
    },
  },
  {
    name: "tempor magna",
    category: "culpa",
    price: 88.7475,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80",
      alt: "consectetur qui",
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
        "id dolore ea culpa ipsum do do nulla cillum ullamco aliquip labore enim excepteur dolor cupidatat in cupidatat incididunt qui",
    },
  },
  {
    name: "ea aliquip",
    category: "voluptate",
    price: 11.0348,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80",
      alt: "irure do",
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
        "tempor magna in velit mollit cupidatat consectetur voluptate eiusmod voluptate anim laborum reprehenderit id dolor Lorem aliquip qui in sint",
    },
  },
  {
    name: "duis nostrud",
    category: "nostrud",
    price: 66.9573,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80",
      alt: "qui fugiat",
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
        "aliqua ea voluptate magna anim tempor consequat reprehenderit nostrud labore dolor sint et sunt Lorem tempor officia id cupidatat exercitation",
    },
  },
  {
    name: "ullamco duis",
    category: "est",
    price: 47.999,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80",
      alt: "et dolor",
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
        "adipisicing aliqua cillum qui do dolore commodo mollit et aute do magna do culpa Lorem cupidatat pariatur aliqua ullamco irure",
    },
  },
  {
    name: "laborum do",
    category: "pariatur",
    price: 37.2761,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80",
      alt: "dolore aute",
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
        "consequat cillum Lorem tempor ipsum eu sunt enim sit nostrud voluptate cupidatat qui fugiat incididunt et sint esse voluptate laboris",
    },
  },
  {
    name: "velit mollit",
    category: "adipisicing",
    price: 39.9383,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80",
      alt: "irure Lorem",
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
        "laborum adipisicing laborum deserunt et non deserunt proident consequat ad id Lorem magna commodo aute ullamco elit mollit ipsum ullamco",
    },
  },
  {
    name: "sint minim",
    category: "aliqua",
    price: 65.836,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80",
      alt: "pariatur cupidatat",
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
        "culpa veniam mollit exercitation elit pariatur et elit non reprehenderit proident pariatur ipsum cillum aute qui ea sunt consectetur ex",
    },
  },
];
