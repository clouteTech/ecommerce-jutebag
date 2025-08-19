// import Productcard from "../Components/Productcard";
// import Bayleaves from "../assets/Bayleaves.jpg";
// import BlackPepper from "../assets/BlackPepper.jpg";
// import Cinnamon from "../assets/Cinnamon.jpg";
// import Cloves from "../assets/Cloves.jpg";
// import Coriander from "../assets/Coriander.jpg";
// import Cumin from "../assets/Cumin.jpg";
// import Fenugreek from "../assets/Fenugreek.jpg";
// import MustardSeeds from "../assets/MustardSeeds.jpg";
// import Nutmeg from "../assets/Nutmeg.jpg";
// import Saffron from "../assets/Saffron.jpg";
// import Turmeric from "../assets/Turmeric.jpg";
// import TurmericPowder from "../assets/TurmericPowder.jpg";
// import CorianderPowder from "../assets/CorianderPowder.jpg";
// import CuminPowder from "../assets/CuminPowder.jpg";
// import CinnamonPowder from "../assets/CinnamonPowder.jpg";
// import GaramMasala from "../assets/GaramMasala.jpg";
// import RedChilliPowder from "../assets/RedChilliPowder.jpg";
// import SambarMasala from "../assets/SambarMasala.jpg";
// import ChaatMasala from "../assets/ChaatMasala.jpg";

// const Spices = [
//   {
//     id: 1,
//     img: Cinnamon,
//     name: "Cinnamon",
//     price: 0.9,
//     variants: [
//       { id: 1, size: 100 },
//       { id: 2, size: 250 },
//       { id: 3, size: 500 },
//     ],
//     gst: 5,
//     rating: 4.5,
//     description:
//       "Cinnamon is a warm, sweet spice made from the inner bark of trees. It’s used in both sweet and savory dishes for its distinctive flavor and aroma.",
//   },
//   {
//     id: 2,
//     img: Bayleaves,
//     name: "Bayleaves",
//     price: 0.8,
//     gst: 8,
//     variants: [
//       { id: 1, size: 100 },
//       { id: 2, size: 250 },
//       { id: 3, size: 500 },
//     ],
//     rating: 5,
//     description:
//       "Bay leaves are fragrant herbs used to flavor soups, stews, and rice dishes. They are typically removed before serving.",
//   },
//   {
//     id: 3,
//     img: BlackPepper,
//     name: "BlackPepper",
//     price: 20,
//     gst: 7,
//     variants: [
//       { id: 1, size: 100 },
//       { id: 2, size: 250 },
//       { id: 3, size: 500 },
//     ],
//     rating: 4.8,
//     description:
//       "Black pepper is a pungent spice made from dried peppercorns. It adds heat and depth to many types of cuisine.",
//   },
//   {
//     id: 4,
//     img: Cloves,
//     name: "Cloves",
//     price: 12,
//     gst: 6,
//     variants: [
//       { id: 1, size: 100 },
//       { id: 2, size: 250 },
//       { id: 3, size: 500 },
//     ],
//     rating: 4.8,
//     description:
//       "Cloves are aromatic flower buds used in spice blends, desserts, and curries. They have a strong, warm, sweet flavor.",
//   },
//   {
//     id: 5,
//     img: Coriander,
//     name: "Coriander",
//     price: 10,
//     gst: 7.5,
//     variants: [
//       { id: 1, size: 100 },
//       { id: 2, size: 250 },
//       { id: 3, size: 500 },
//     ],
//     rating: 4.9,
//     description:
//       "Coriander seeds have a citrusy, nutty flavor and are used in Indian, Middle Eastern, and Mediterranean cuisine.",
//   },
//   {
//     id: 6,
//     img: Cumin,
//     name: "Cumin",
//     price: 11,
//     gst: 5,
//     variants: [
//       { id: 1, size: 100 },
//       { id: 2, size: 250 },
//       { id: 3, size: 500 },
//     ],
//     rating: 4.9,
//     description:
//       "Cumin has a warm, earthy flavor and is a key spice in curry powder and chili blends.",
//   },
//   {
//     id: 7,
//     img: Fenugreek,
//     name: "Fenugreek",
//     price: 9,
//     gst: 8,
//     variants: [
//       { id: 1, size: 100 },
//       { id: 2, size: 250 },
//       { id: 3, size: 500 },
//     ],
//     rating: 4.8,
//     description:
//       "Fenugreek seeds have a slightly bitter, maple-like flavor and are commonly used in Indian and Middle Eastern cooking.",
//   },
//   {
//     id: 8,
//     img: MustardSeeds,
//     name: "MustardSeeds",
//     price: 7,
//     gst: 5,
//     variants: [
//       { id: 1, size: 100 },
//       { id: 2, size: 250 },
//       { id: 3, size: 500 },
//     ],
//     rating: 4.9,
//     description:
//       "Mustard seeds are used for tempering and add a nutty flavor to curries, pickles, and dals.",
//   },
//   {
//     id: 9,
//     img: Nutmeg,
//     name: "Nutmeg",
//     price: 15,
//     gst: 7,
//     variants: [
//       { id: 1, size: 100 },
//       { id: 2, size: 250 },
//       { id: 3, size: 500 },
//     ],
//     rating: 5,
//     description:
//       "Nutmeg has a warm, sweet taste and is used in baking, beverages, and savory dishes.",
//   },
//   {
//     id: 10,
//     img: Saffron,
//     name: "Saffron",
//     price: 25,
//     gst: 5,
//     variants: [
//       { id: 1, size: 100 },
//       { id: 2, size: 250 },
//       { id: 3, size: 500 },
//     ],
//     rating: 5,
//     description:
//       "Saffron is a luxurious spice known for its golden color and distinct floral flavor. It's often used in biryanis and desserts.",
//   },
//   {
//     id: 11,
//     img: Turmeric,
//     name: "Turmeric",
//     price: 10,
//     gst: 6,
//     variants: [
//       { id: 1, size: 100 },
//       { id: 2, size: 250 },
//       { id: 3, size: 500 },
//     ],
//     rating: 5,
//     description:
//       "Turmeric is a bright yellow spice with earthy, bitter notes. It's known for its anti-inflammatory properties.",
//   },
//   {
//     id: 12,
//     img: CinnamonPowder,
//     name: "CinnamonPowder",
//     price: 12,
//     gst: 7,
//     variants: [
//       { id: 1, size: 100 },
//       { id: 2, size: 250 },
//       { id: 3, size: 500 },
//     ],
//     rating: 4.8,
//     description:
//       "Ground cinnamon used in baking and spice blends. Adds sweet warmth to dishes.",
//   },
//   {
//     id: 13,
//     img: CorianderPowder,
//     name: "CorianderPowder",
//     price: 15,
//     gst: 5,
//     variants: [
//       { id: 1, size: 100 },
//       { id: 2, size: 250 },
//       { id: 3, size: 500 },
//     ],
//     rating: 4.5,
//     description:
//       "Ground coriander seeds used in curries and spice rubs for a mild, lemony flavor.",
//   },
//   {
//     id: 14,
//     img: CuminPowder,
//     name: "CuminPowder",
//     price: 18,
//     gst: 5,
//     variants: [
//       { id: 1, size: 100 },
//       { id: 2, size: 250 },
//       { id: 3, size: 500 },
//     ],
//     rating: 4.8,
//     description:
//       "Powdered cumin that brings warmth and depth to dishes like dals, curries, and rice.",
//   },
//   {
//     id: 15,
//     img: GaramMasala,
//     name: "GaramMasala",
//     price: 10,
//     gst: 5,
//     variants: [
//       { id: 1, size: 100 },
//       { id: 2, size: 250 },
//       { id: 3, size: 500 },
//     ],
//     rating: 4.9,
//     description:
//       "Finely ground dried red chillies used to add heat to a variety of Indian dishes.",
//   },
//   {
//     id: 16,
//     img: RedChilliPowder,
//     name: "RedChilliPowder",
//     price: 12,
//     gst: 5,
//     variants: [
//       { id: 1, size: 100 },
//       { id: 2, size: 250 },
//       { id: 3, size: 500 },
//     ],
//     rating: 5,
//     description:
//       "Finely ground dried red chillies used to add heat to a variety of Indian dishes.",
//   },
//   {
//     id: 17,
//     img: SambarMasala,
//     name: "SambarMasala",
//     price: 13,
//     gst: 5,
//     variants: [
//       { id: 1, size: 100 },
//       { id: 2, size: 250 },
//       { id: 3, size: 500 },
//     ],
//     rating: 5,
//     description:
//       "A South Indian spice blend used to make the lentil-based dish sambar. Rich, spicy, and aromatic.",
//   },
//   {
//     id: 18,
//     img: TurmericPowder,
//     name: "TurmericPowder",
//     price: 12,
//     gst: 5,
//     variants: [
//       { id: 1, size: 100 },
//       { id: 2, size: 250 },
//       { id: 3, size: 500 },
//     ],
//     rating: 5,
//     description:
//       "Powdered turmeric used in Indian cooking for color, flavor, and health benefits.",
//   },
//   {
//     id: 19,
//     img: ChaatMasala,
//     name: "ChaatMasala",
//     price: 16,
//     gst: 5,
//     variants: [
//       { id: 1, size: 100 },
//       { id: 2, size: 250 },
//       { id: 3, size: 500 },
//     ],
//     rating: 4.8,
//     description:
//       "Tangy and spicy seasoning mix used in Indian street food like chaat and fruits.",
//   },
// ];
// export default Spices;
