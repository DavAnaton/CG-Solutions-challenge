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
    selectedMusic: Music;
    playing:boolean = false;

    constructor(private musicService: MusicService) { }
    ngOnInit(): void {
        this.getMusics();
    }

    getMusics(): void {
        this.musicService.getAjaxMusics().then(musics => {
            this.musics = musics;
            this.selectedMusic = this.musics[0];
        });
    }

    playClicked():void {
        this.playing = true; 
    }
    pauseClicked():void {
        this.playing = false;
    }
    previousClicked():void {
        var newId = this.selectedMusic.id - 2;
        if(newId >= 0){
            this.selectedMusic = this.musics[newId];
        }
    }
    nextClicked():void {
        var newId = this.selectedMusic.id;
        if(newId < this.musics.length){
            this.selectedMusic = this.musics[newId];
        }
    }
}
