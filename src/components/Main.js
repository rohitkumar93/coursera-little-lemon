import React from "react";
import Card from "./Card";
import greekSalad from "../assets/Salad.jpg";
import fajita from "../assets/fajita.jpg";
import LemonDessert from "../assets/LemonDessert.jpg";

const specialsData = [
  {
    img: fajita,
    title: "Fajita",
    price: 5.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar tristique consequat.",
  },
  {
    img: greekSalad,
    title: "Salad",
    price: 2.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar tristique consequat.",
  },
  {
    img: LemonDessert,
    title: "Dessert",
    price: 1.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar tristique consequat.",
  },
];

function Main() {
  const specialsCards = specialsData.map((item) => {
    return (
      <Card
        key={item.title}
        image={item.img}
        title={item.title}
        price={item.price}
        description={item.description}
      />
    );
  });

  return (
    <main>
      <section className="specials">
        <div className="top">
          <h1>Our Chef recommends!</h1>
          <button>Menu</button>
        </div>
        <div className="cards">{specialsCards}</div>
      </section>
      <br></br>
    </main>
  );
}

export default Main;
