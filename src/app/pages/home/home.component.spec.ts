import { Component, OnInit } from '@angular/core';
import { Video } from '../../models/video.model'; // Certifique-se de que esse caminho está correto
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
playVideo: any;
playVideo(arg0: any) {
throw new Error('Method not implemented.');
}
[x: string]: any;
playVideo(arg0: any) {
throw new Error('Method not implemented.');
}
  videos: Video[] = [];

  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    this.videos = this.videoService.getVideos();
  }
}
