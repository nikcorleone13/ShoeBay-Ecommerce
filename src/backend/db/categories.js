import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "sneakers",
    description:
      "Style meets comfort in our Sneakers Section. Handpicked for unparalleled support and breathability, express your unique personality with every step.",
  },
  {
    _id: uuid(),
    categoryName: "running",
    description:
      "Unleash your running potential with our high-performance Running Collection. Meticulously curated for optimal support, breathability, and personalized performance enhancement.",
  },
  {
    _id: uuid(),
    categoryName: "casual",
    description:
      "Level up your streetwear game with effortlessly fashionable and cutting-edge styles created for unsurpassed comfort and confidence, enjoy the essence of urban style.",
  },
];
