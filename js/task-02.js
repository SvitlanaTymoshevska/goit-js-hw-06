const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector("#ingredients");

const makeItems = ingredients => {
  return ingredients.map(ingredient => {
    const itemEl = document.createElement("li");
    itemEl.textContent = ingredient;
    itemEl.classList.add("item");
    
    return itemEl;
  });
};

const itemsEl = makeItems(ingredients);

ingredientsEl.append(...itemsEl);