// src/app/services/video.service.ts

import { Injectable } from '@angular/core';
import { Video } from '../models/video.model';  // Importe a interface Video

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  constructor() {}

  getVideos(): Video[] {
    return [
      {
        id: 1,
        title: 'Video 1',
        description: 'Description of video 1',
        thumbnail: 'assets/thumbnail1.jpg'  // Adicionando o thumbnail
      },
      {
        id: 2,
        title: 'Video 2',
        description: 'Description of video 2',
        thumbnail: 'assets/thumbnail2.jpg'  // Adicionando o thumbnail
      },
      // Adicione mais vídeos conforme necessário
    ];
  }
}
