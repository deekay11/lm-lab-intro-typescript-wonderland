import { clear, print, askQuestion } from '../ui/console';
import { endAdventure,haveAdventures } from '../..';

interface Grocery {
  name: string;
  price: number;
}

const GROCERIES: Grocery[] = [
  { name: 'Bread', price: 3.50 },
  { name: 'Milk', price: 2.75 },
  { name: 'Eggs', price: 4.99 },
  { name: 'Cheese', price: 6.50 },
  { name: 'Apples', price: 2.99 },
];

export function buyGroceries(name: string) {
  clear(false);
  print(`🛒 Welcome to the grocery store, ${name}! 🛒`);
  print('Here is what we have today: ');
  GROCERIES.forEach((g, i) => print(`  ${i + 1}. ${g.name} - $${g.price.toFixed(2)}`));
  askQuestion('Which item would you like to purchase? (Please enter a number)', chooseGrocery);
}

function chooseGrocery(input: string) {
  const selectedIndex = parseInt(input, 10) - 1;

  if (selectedIndex >= 0 && selectedIndex < GROCERIES.length) {
    const selectedGrocery = GROCERIES[selectedIndex];
    print(`You have purchased ${selectedGrocery.name} for $${selectedGrocery.price.toFixed(2)}`);
  } else {
    print(`😮 Sorry, ${input} is not a valid option.`);
  }

  return askQuestion('Press ENTER to restart WonderLand! ', haveAdventures); 
}
