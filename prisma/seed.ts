import { productsData } from "./producsData";
import prisma from "../lib/prisma";

const run = async () => {
  await Promise.all(
    productsData.map(async (product) => {
      return await prisma.product.create({
        data: {
          name: product.name,
          category: {
            connectOrCreate: {
              where: {
                name: product.category,
              },
              create: {
                name: product.category,
              },
            },
          },
          price: product.price,
          currency: product.currency,
          image: {
            create: {
              src: product.image.src,
              alt: product.image.alt,
            },
          },
          bestseller: product.bestseller,
          featured: product.featured,
          details: {
            create: {
              width: product.details.dimensions.width,
              height: product.details.dimensions.height,
              size: product.details.size,
              description: product.details.description,
            },
          },
        },
      });
    })
  );
};

run()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
