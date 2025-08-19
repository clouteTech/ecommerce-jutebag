import React from "react";
import Jutebag1 from "../assets/Jute bag1.jpg";
import Jutebag2 from "../assets/Jute bag2.jpeg";
import jutebag3 from "../assets/jute bag3.jpg";
import jutebag4 from "../assets/jute bag4.jpeg";
import jutebag5 from "../assets/jute bag5.jpeg";
import jutebag6 from "../assets/jute bag6.jpg";
import jutebag7 from "../assets/jute bag7.jpeg";
import jutebag8 from "../assets/jute bag8.jpeg";
import jutebag9 from "../assets/jute bag9.jpg";
import jutebag10 from "../assets/jute bag10.jpg";
import jutebag11 from "../assets/jute bag11.jpeg";
import jutebag12 from "../assets/jute bag12.jpg";
import jutebag13 from "../assets/jute bag13.jpeg";

const Jutebag = [
  {
    id: 1,
    img: Jutebag1,
    name: "Classic Eco Jute Bag",
    price: 90,
    variants: [
      { id: 1, size: "M" },
      { id: 2, size: "L" },
      { id: 3, size: "XL" },
    ],
    defaultVariant: "M",
    gst: 5,
    rating: 4.5,
    description:
      "Handcrafted jute tote with sturdy handles, blending style with sustainability.",
  },
  {
    id: 2,
    img: Jutebag2,
    name: "Handmade Jute Tote",
    price: 90,
    variants: [
      { id: 1, size: "M" },
      { id: 2, size: "L" },
      { id: 3, size: "XL" },
    ],
    defaultVariant: "M",
    gst: 5,
    rating: 4.5,
    description:
      "The Classic Eco Jute Bag is a durable, reusable tote made from natural fibers. It’s ideal for groceries, daily essentials, and eco-friendly living.",
  },
  {
    id: 3,
    img: jutebag3,
    name: "Eco Shopper Jute Bag",
    price: 90,
    variants: [
      { id: 1, size: "M" },
      { id: 2, size: "L" },
      { id: 3, size: "XL" },
    ],
    defaultVariant: "M",
    gst: 5,
    rating: 4.5,
    description:
      "Premium quality jute bag with fine stitching, perfect for stylish eco-living.",
  },
  {
    id: 4,
    img: jutebag4,
    name: "Fancy Jute Gift Bag",
    price: 90,
    variants: [
      { id: 1, size: "M" },
      { id: 2, size: "L" },
      { id: 3, size: "XL" },
    ],
    defaultVariant: "M",
    gst: 5,
    rating: 4.5,
    description:
      "Spacious and reusable shopping tote, crafted with eco-friendly jute fabric.",
  },
  {
    id: 5,
    img: jutebag5,
    name: "Natural Jute Tote",
    price: 90,
    variants: [
      { id: 1, size: "M" },
      { id: 2, size: "L" },
      { id: 3, size: "XL" },
    ],
    defaultVariant: "M",
    gst: 5,
    rating: 4.5,
    description:
      "Rustic brown finish with sturdy design, ideal for everyday shopping needs.",
  },
  {
    id: 6,
    img: jutebag6,
    name: "Luxury Handcrafted Jute Bag",
    price: 90,
    variants: [
      { id: 1, size: "M" },
      { id: 2, size: "L" },
      { id: 3, size: "XL" },
    ],
    defaultVariant: "M",
    gst: 5,
    rating: 4.5,
    description:
      "Strong and sustainable carry bag for groceries, books, and daily use.",
  },
  {
    id: 7,
    img: jutebag7,
    name: "Eco Jute Shopping Tote",
    price: 90,
    variants: [
      { id: 1, size: "M" },
      { id: 2, size: "L" },
      { id: 3, size: "XL" },
    ],
    defaultVariant: "M",
    gst: 5,
    rating: 4.5,
    description:
      "Strong and sustainable carry bag for groceries, books, and daily use.",
  },
  {
    id: 8,
    img: jutebag8,
    name: "Rustic Brown Jute Bag",
    price: 90,
    variants: [
      { id: 1, size: "M" },
      { id: 2, size: "L" },
      { id: 3, size: "XL" },
    ],
    defaultVariant: "M",
    gst: 5,
    rating: 4.5,
    description:
      "Charming gift bag with a natural jute finish, perfect for eco-conscious celebrations.",
  },
  {
    id: 9,
    img: jutebag9,
    name: "Eco-Friendly Carry Bag",
    price: 90,
    variants: [
      { id: 1, size: "M" },
      { id: 2, size: "L" },
      { id: 3, size: "XL" },
    ],
    defaultVariant: "M",
    gst: 5,
    rating: 4.5,
    description:
      "Lightweight, reusable jute carry bag your eco-friendly shopping partner.",
  },
  {
    id: 10,
    img: jutebag10,
    name: "Fancy Jute Gift Bag",
    price: 90,
    variants: [
      { id: 1, size: "M" },
      { id: 2, size: "L" },
      { id: 3, size: "XL" },
    ],
    defaultVariant: "M",
    gst: 5,
    rating: 4.5,
    description:
      "Trendy and strong jute shopper bag, perfect for carrying everyday essentials.",
  },
  {
    id: 11,
    img: jutebag11,
    name: "Classic Eco Jute Bag",
    price: 90,
    variants: [
      { id: 1, size: "M" },
      { id: 2, size: "L" },
      { id: 3, size: "XL" },
    ],
    defaultVariant: "M",
    gst: 5,
    rating: 4.5,
    description:
      "Lightweight, reusable jute carry bag your eco-friendly shopping partner.",
  },
  {
    id: 12,
    img: jutebag12,
    name: "Eco-Friendly Carry Bag",
    price: 90,
    variants: [
      { id: 1, size: "M" },
      { id: 2, size: "L" },
      { id: 3, size: "XL" },
    ],
    defaultVariant: "M",
    gst: 5,
    rating: 4.5,
    description:
      "Charming gift bag with a natural jute finish, perfect for eco-conscious celebrations.",
  },
  {
    id: 13,
    img: jutebag13,
    name: "Eco Shopper Jute Bag",
    price: 90,
    variants: [
      { id: 1, size: "M" },
      { id: 2, size: "L" },
      { id: 3, size: "XL" },
    ],
    defaultVariant: "M",
    gst: 5,
    rating: 4.5,
    description:
      "Premium quality jute bag with fine stitching, perfect for stylish eco-living.",
  },
];

export default Jutebag;
