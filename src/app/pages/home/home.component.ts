import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoService } from '../../services/video.service';
import { Video } from '../../models/video.model';

@Component({
  selector: 'app-home',
  standalone: true, // Define o componente como standalone
  imports: [CommonModule], // Importa CommonModule para habilitar *ngFor
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  videos: Video[] = [];

  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    this.videos = this.videoService.getVideos();
  }
}
