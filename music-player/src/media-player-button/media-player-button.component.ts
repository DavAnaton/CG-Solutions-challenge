import { Component, ContentChild } from '@angular/core';

@Component({
    selector: 'media-player-button',
    templateUrl: './media-player-button.component.html',
    styleUrls: ['./media-player-button.component.css'],
})
export class MediaPlayerButtonComponent{
	@ContentChild(String) label:String;
	
	onClick(): void{
		console.log(this.label);
	}
}
