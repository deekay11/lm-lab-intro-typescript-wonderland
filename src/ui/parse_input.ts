import { Hole, HOLES } from '../chapter_1/chapter_1.types';
export function parseHoleInput(input: string): Hole | undefined {
const chosenHole = parseInt(input);
	if (isNaN(chosenHole)) {
		return undefined;
	}
	if (chosenHole < 0 || chosenHole > HOLES.length - 1) {
		return undefined;
	}
	return HOLES[chosenHole];
}
