import { print, clear, askQuestion } from '../ui/console';
import { endAdventure } from '../..';
import { buyGroceries } from '../chapter_8/chapter_8_grocery';

interface Park {
  name: string;
  location: string;
  description: string;
  visit: () => void;
}

const parks: Park[] = [
  {
    name: 'Green Park',
    location: 'London, England',
    description: 'A lovely park with plenty of green space and stunning flower gardens.',
    visit: () => {
      print(`You're now visiting ${parks[0].name}. Enjoy the view!`);
    },
  },
  {
    name: 'Central Park',
    location: 'New York, USA',
    description: 'A massive park with many lakes, gardens, and walking paths in the heart of Manhattan.',
    visit: () => {
      print(`You're now visiting ${parks[1].name}. Enjoy the view!`);
    },
  },
  {
    name: 'Yoyogi Park',
    location: 'Tokyo, Japan',
    description: 'A beautiful park with large open spaces and many cherry blossom trees.',
    visit: () => {
      print(`You're now visiting ${parks[2].name}. Enjoy the view!`);
    },
  },
];

export function takeAWalkInThePark(): void {
  clear(true);
  print('Welcome to Take a Walk in the Park!\n');
  print('Here are some parks you can visit:');
  for (let i = 0; i < parks.length; i++) {
    print(`${i + 1}. ${parks[i].name} (${parks[i].location}) - ${parks[i].description}`);
  }

  askQuestion(
    'Which park would you like to visit? Please enter a number: ',
    (parkIndex: string) => {
      const selectedParkIndex = parseInt(parkIndex, 10) - 1;
      if (selectedParkIndex >= 0 && selectedParkIndex < parks.length) {
        parks[selectedParkIndex].visit();
        return askQuestion('Would you like to visit another park? (y/n) ', (answer) => {
          if (answer === 'y') {
            return takeAWalkInThePark();
          }
           else {
            return askQuestion(
                'Press ENTER to Continue. ',
                buyGroceries);
        }
    })
}
    });

}
