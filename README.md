# Bejamas technical homework

## Live preview

The app is deployed on vercel at [https://bejamas-gold.vercel.app/](https://bejamas-gold.vercel.app/)

## Working features

- Featured product
- Product lists
- Add to cart
- Pagination
- Sorting
- Filtering by category
- Web performance
- API implementation

NB: Filtering by price is not working. Need more time to finish that feature

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before we get started, we're going to need to make sure we have a few things installed and available on our machine.

#### Node >= 12

##### MacOS

```bash
curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"
```

##### Other

See the installation guides available @ nodejs.org:

https://nodejs.org/en/download/package-manager/

#### Yarn

```bash
npm i -g yarn
```

### Installing

Below is a series of step by step instructions that tell you how to get a development env running.

Create a local clone of the repository

Enter the cloned repositories' directory

Install the projects dependencies

```bash
yarn
```

Create a `.env` file based on the [.env.example template](.env.example)

Start the projects development server

```bash
yarn dev
```

The project should now be available at http://localhost:3000

## Technologies used

- Next JS (React)
- Mongo DB
- Chakra UI
