import { endAdventure } from '../..';
import { meetTheQueen } from '../chapter_5/chapter_5_queen_of_hearts';
import { askQuestion, clear, print } from '../ui/console';

type Hedgehog = 'Hedgehog';
type CricketBall = 'Cricket ball';
type CroquetBall = 'Croquet ball';
type Football = 'Football';
type Flamingo = 'Flamingo';
type Hammer = 'Hammer';
type CroquetMallet = 'Croquet Mallet';

type Ball = Hedgehog | CricketBall | CroquetBall | Football;
type Mallet = Flamingo | Hammer | CroquetMallet;
interface Croquet<TBall extends Ball, TMallet extends Mallet> {
	hit: (ball: TBall, mallet: TMallet) => boolean;
}

export function playCroquet(): void {
	clear(true);
	print('The Queen of Hearts 👑❤ invites you to play croquet 🏑');

	const game: Croquet<Ball, Mallet> = {
		hit: (ball, mallet) => {
			let score = 0;

				if (typeof ball === 'string') {
				if (ball === 'Hedgehog') score += 50;
			}

			if (typeof mallet === 'string') {
				if (mallet === 'Flamingo') score += 50;
			}

			return score === 100;
		},
	};

	if (game && game.hit && game.hit("Hedgehog", "Flamingo")) {
		print('🏆 Success! You scored! 🏆');
		print('Time to chat with the queen...');
		return askQuestion('Press ENTER to continue! ', meetTheQueen);
	} else {
		print(
			'😭 Sadly, you lost. And now the queen wants to decapitate you! 😱'
		);
		return endAdventure();
	}
}
