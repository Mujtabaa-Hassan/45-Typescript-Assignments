function makeSandwich(...items: string[]) {
  console.log(`Making a sandwich with: ${items.join(", ")}.`);
}

makeSandwich("ham", "cheese");
makeSandwich("turkey", "lettuce", "tomato");
makeSandwich("avocado", "sprouts", "mustard", "mayo");
