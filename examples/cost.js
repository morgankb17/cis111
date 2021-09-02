// jshint esversion: 7

let getTotalCost = (size, num_of_toppings) => {
  let costs1 = {
    Small: 10,
    Medium: 12,
    Large: 14,
    "Extra-Large": 16,
    Giant: 18
  };
  let costs2 = {
    Mushrooms: 0.5,
    Olives: 0.5,
    Habaneros: 0.5,
    Peperoni: 0.5,
    Bacon: 0.5,
    Peppers: 0.5
  };
  return "\u0024" + (costs1[size] + costs2[num_of_toppings]).toFixed(2);
};
