const tarot = {
  _cards: {
    names: [
      "The Fool",
      "Magician",
      "High Priestess",
      "Empress",
      "Emperor",
      "Hierophant",
      "Lovers",
      "Chariot",
      "Strength",
      "Hermit",
      "Wheel of Fortune",
      "Justice",
      "Hanged Man",
      "Death",
      "Temperance",
      "Devil",
      "Tower",
      "Star",
      "Moon",
      "Sun",
      "Judgment",
      "World",
    ],
    descriptions: [
      "Beginnings",
      "Power, Action",
      "Mystery, Intuition",
      "Femininity, Beauty",
      "Structure, Solidity",
      "Trandition, Belief",
      "Love, Union",
      "Control, Willpower",
      "Strength, Courage",
      "Introspection",
      "Karma, Destiny",
      "Truth, Justice",
      "Sacrifice",
      "Transition",
      "Balance, Purpose",
      "Bondage, Addiction",
      "Disaster, Upheaval",
      "Hope, Renewal",
      "Illusion, Fear",
      "Warmth, Vitality",
      "Absolution",
      "Completion, Travel",
    ],
  },
  get cards() {
    return this._cards;
  },
  get names() {
    return this._cards.names;
  },
  get descriptions() {
    return this._cards.descriptions;
  },
};

const randomNumber = Math.floor(Math.random() * tarot.names.length - 1);

console.log("Wellcome, to tarot card picker");
console.log(`Your card is ${tarot.names[randomNumber]}.`);
console.log(
  `${tarot.names[randomNumber]} card means '${tarot.descriptions[randomNumber]}'.`
);
