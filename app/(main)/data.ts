type data = {
  image: {
    desktop: any;
  };
  name: string;
  category: string;
  price: number;
};
import img_1 from "./images/image-waffle-desktop.jpg";
import img_2 from "./images/image-creme-brulee-desktop.jpg";
import img_3 from "./images/image-macaron-desktop.jpg";
import img_4 from "./images/image-tiramisu-desktop.jpg";
import img_5 from "./images/image-baklava-desktop.jpg";
import img_6 from "./images/image-meringue-desktop.jpg";
import img_7 from "./images/image-cake-desktop.jpg";
import img_8 from "./images/image-brownie-desktop.jpg";
import img_9 from "./images/image-panna-cotta-desktop.jpg";
export const data: data[] = [
  {
    image: {
      desktop: img_1,
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
  },
  {
    image: {
      desktop: img_2,
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
  },
  {
    image: {
      desktop: img_3,
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
  },
  {
    image: {
      desktop: img_4,
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
  },
  {
    image: {
      desktop: img_5,
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
  },
  {
    image: {
      desktop: img_6,
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
  },
  {
    image: {
      desktop: img_7,
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
  },
  {
    image: {
      desktop: img_8,
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
  },
  {
    image: {
      desktop: img_9,
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
  },
];
