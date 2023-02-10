import { endAdventure, haveAdventures } from '../..';
import { askQuestion, clear, print } from '../ui/console';
import { takeAWalkInThePark } from '../chapter_7/chapter_7_walk';
interface WakeUp {
	wake?: WakeUpFromDream;
}
interface WakeUpFromDream {
	wake?: WakeUpFromREMSleep;
}
interface WakeUpFromREMSleep {
	wake?: WakeUpFromDeepSleep;
}
interface WakeUpFromDeepSleep {
	canWake?: string;
}

export function wakeUp(): void {
	clear(true);
	print('Wait... was this all a dream?');

	const awoken = tryToWakeUp();

	if (awoken.wake?.wake?.wake?.canWake === 'Yes') {
		print('You have awoken in your bed 🛏 What a lovely dream.');
		print('Although...❓❓❓');
		print('What are these tarts doing here?! 🥧🥧🥧🥧🥧🥧 🤔');

		print(
			'✅ CONGRATULATIONS! You successfully made it through Wonderland! 🥳'
		);

		return askQuestion('Press ENTER to continue! ', takeAWalkInThePark);
		
	} else {
		print('You are unable to wake up! 😱');
		return endAdventure();
	}
}

function tryToWakeUp(): WakeUp {
	
	return {
		wake: {
			wake: {
				wake: {
					canWake: 'Yes',
					},
				},
			},
		};
}
