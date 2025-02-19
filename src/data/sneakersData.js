import dunkImage from "../assets/nike-dunk-bw.jpg";
import jordan1Image from "../assets/jordan-1-black-toe.jpg";
import jordan3Image from "../assets/jordan-3-black-cement.jpg";
import asicsImage from "../assets/asics-1130.jpg";
import yeezyImage from "../assets/yeezy-bred.jpg";

const sneakersData = [
  {
    id: 1,
    model: "Dunk",
    brand: "Nike",
    price: 150,
    image: dunkImage, // Use the imported image
  },
  {
    id: 2,
    model: "Jordan 1 Black Toe",
    brand: "Air Jordans",
    price: 200,
    image: jordan1Image,
  },
  {
    id: 3,
    model: "Jordan 3 Black Cement",
    brand: "Air Jordans",
    price: 220,
    image: jordan3Image,
  },
  {
    id: 4,
    model: "ASICS 1130",
    brand: "ASICS",
    price: 120,
    image: asicsImage,
  },
  {
    id: 5,
    model: "Yeezy Boost 350 Bred",
    brand: "Adidas",
    price: 250,
    image: yeezyImage,
  },
];

export default sneakersData;
