import { Injectable } from '@angular/core';

import { Music } from './music';
import { MUSICS } from './mock-music';

@Injectable()
export class MusicService {
	getMusics(): Promise<Music[]> {
		return Promise.resolve(MUSICS);
	}
	getAjaxMusics(): Promise<Music[]> {
		return new Promise(resolve => {
			// Simulate server latency with 2 second delay
			setTimeout(() => resolve(this.getMusics()), 2000);
		});
	}
}