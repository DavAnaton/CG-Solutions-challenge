import { Component, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'media-player-button',
	templateUrl: './media-player-button.component.html',
	styleUrls: ['./media-player-button.component.css'],
})
export class MediaPlayerButtonComponent{
	private elRef:ElementRef;
	label:string;
	@Output() buttonEvent:EventEmitter<string> = new EventEmitter();
	
	constructor(elRef: ElementRef) {
		this.elRef = elRef;
	}
	ngOnInit(): void {
		this.label = this.elRef.nativeElement.innerText;
	}
	onClick(): void{
		this.buttonEvent.emit(this.label);
	}


}
