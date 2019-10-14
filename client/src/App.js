import React from "react";
import Slider from "./components/Slider";

const slides = [
  {
    id: 0,
    image: {
      url:
        "https://res.cloudinary.com/johnnyair/image/upload/mirko-krizan-e3lmbt_Ep3w-unsplash.jpg"
    },
    contentAlign: "center",
    content: {
      header: "Welcome to my world",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
       when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
       It has survived not only five centuries, but also the leap into electronic`
    }
  },
  {
    id: 1,
    image: {
      url:
        "https://res.cloudinary.com/johnnyair/image/upload/alex-mares-pUZK7jUH3d4-unsplash.jpg"
    },
    contentAlign: "left",
    header: "Quick Survey - The Collection",
    content: {
      header: "Ginger with Extra Spice",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
       when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
       It has survived not only five centuries, but also the leap into electronic`
    }
  },
  {
    id: 2,
    image: {
      url:
        "https://res.cloudinary.com/johnnyair/image/upload/alex-mares-w4Ixo17CH30-unsplash.jpg"
    },
    contentAlign: "center",
    content: {
      header: "Oh my world!!!",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
       when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
       It has survived not only five centuries, but also the leap into electronic`
    }
  },
  {
    id: 3,
    image: {
      url:
        "https://res.cloudinary.com/johnnyair/image/upload/jose-carbajal-8xyki0bqvgw-unsplash.jpg"
    },
    contentAlign: "right",
    content: {
      header: "Monsterous Beauty!!!",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
       when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
       It has survived not only five centuries, but also the leap into electronic`
    }
  }
];

function App() {
  return <Slider slides={slides} slideInterval={10000} slideItemKey="id" />;
}

export default App;
