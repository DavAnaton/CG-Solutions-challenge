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
 
  constructor(private musicService: MusicService) { }
 
  getMusices(): void {
    this.musicService.getAjaxMusics().then(musics => this.musics = musics);
  }
 
  ngOnInit(): void {
    this.getMusices();
  }
 
  onSelect(music: Music): void {
    this.selectedMusic = music;
  }
}
