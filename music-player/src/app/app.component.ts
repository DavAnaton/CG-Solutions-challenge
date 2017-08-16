import { Component, OnInit } from '@angular/core';
import { Music } from '../music/music';
import { MusicService } from '../music/music.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [MusicService],
})
export class AppComponent implements OnInit {
    title = 'Music Player';;
    musics: Music[];
    selectedMusic: Music = {id: undefined, name:""};
    playing:boolean = false;
    random:boolean = false;
    private playingOrder:number[] = [];
    loop:boolean = false;

    constructor(private musicService: MusicService) { }
    ngOnInit(): void {
        this.getMusics();
    }

    getMusics(): void {
        this.musicService.getAjaxMusics().then(musics => {
            this.musics = musics;
            this.selectedMusic = this.musics[0];

            for(var i = 0; i < this.musics.length; i++){
                this.playingOrder.push(i);
            }
        });
    }

    playClicked():void {
        this.playing = true; 
    }
    pauseClicked():void {
        this.playing = false;
    }
    previousClicked():void {
        this.selectedMusic = this.musics[this.getIndex(this.selectedMusic.id, -1)];
    }
    nextClicked():void {
        this.selectedMusic = this.musics[this.getIndex(this.selectedMusic.id, +1)];
    }
    private getIndex(current:number, increment:number):number{
        var oldIndex = current - 1; // Id start at 1, indexes start at 0
        var playingIndex = this.playingOrder.indexOf(oldIndex);
        var newPlayingIndex = playingIndex + increment;
        if(this.loop){
            newPlayingIndex %= this.playingOrder.length;
        }
        if(newPlayingIndex >= 0 && newPlayingIndex < this.musics.length){
            return this.playingOrder[newPlayingIndex];
        }
        else{
            return oldIndex;
        }
    }
    randomClicked(): void{
        this.random = !this.random;
        this.playingOrder = [];
        for(var i = 0; i < this.musics.length; i++){
            this.playingOrder.push(i);
        }
        if(this.random){
            for (var i = this.playingOrder.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = this.playingOrder[i];
                this.playingOrder[i] = this.playingOrder[j];
                this.playingOrder[j] = temp;
            }
        }
    }
    loopClicked(): void{
        this.loop = !this.loop;
    }
}
