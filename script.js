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
    quotes: [
      "I am ready for the next chapter in my life.",
      "I recognize my ability to manifest my goals through the skills I have within me.",
      "All the answers I need are within myself.  I trust my own intuition.",
      "My creativity and abundance are unlimited.",
      "I am my own authority.",
      "I embrace traditions both old and new.",
      "I am love.",
      "I can steer my life any way that I wish.",
      "I have the power to change anything in my life.",
      "Everything I need is within me.  I don’t need to look outside myself for answers.",
      "I create my own luck.",
      "I treat others the way I want to be treated.",
      "I trust that things will work out as they should.",
      "I embrace change with an open mind.",
      "I create perfect harmony in my life.",
      "I find the courage to release my limitations.",
      "I am ready to evolve.",
      "I see the good in myself and in my situation.",
      "I know that I will find my way.",
      "My future is bright and filled with possibilities.",
      "I am ready to receive my higher calling.",
      "I am complete.",
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
  get quotes() {
    return this._cards.quotes;
  },
};

const randomNumber = Math.floor(Math.random() * tarot.names.length - 1);

console.log(`Your card is ${tarot.names[randomNumber]}.`);
console.log(
  `${tarot.names[randomNumber]} card means '${tarot.descriptions[randomNumber]}'.`
);
console.log(`Quotes for you is: '${tarot.quotes[randomNumber]}'`);
