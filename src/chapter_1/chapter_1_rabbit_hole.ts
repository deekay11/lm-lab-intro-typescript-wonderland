import { endAdventure } from '../..';
import { meetTheCheshireCat } from '../chapter_2/chapter_2_cheshire_cat';
import { clear, print, askQuestion } from '../ui/console';
import { parseHoleInput } from '../ui/parse_input';
import { Hole, HOLES } from './chapter_1.types';

export function enterTheRabbitHole(name: string) {
	clear(false);
	print('------------------------');
	print(`🥳 Welcome ${name}! 🥳`);
	print('------------------------');
	print('You can see a number of holes: ');
	HOLES.forEach((h, i) => print(`   ${i} - ${h}`));
	askQuestion('Which number hole will you choose?', chooseHole);
}

function chooseHole(input: string) {
	const hole = parseHoleInput(input);
	if (hole === undefined) {
		print(`😮`);
		print(`${input} is an invalid input 😭`);
		return endAdventure();
	}
	return enterHole(hole);
}

export function enterHole(hole: Hole): void {
	clear(true);
	if (hole === 'Rabbit') {
		return meetTheCheshireCat();
	} else {
		print(`WHAAAAT ❓🤯😅❓`);
		print(`You can't find adventures there!`);
		return endAdventure();
	}
}
