import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Video } from '../../models/video.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], // Certifique-se de incluir isso!
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  videos: Video[] = [
    {
      id: 1,
      title: 'Aprenda Angular em 10 Minutos',
      description: 'Um tutorial rápido e eficaz sobre os conceitos básicos do Angular.',
      thumbnail: 'https://via.placeholder.com/150',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 2,
      title: '10 Dicas de Programação',
      description: 'Melhore suas habilidades em programação com essas dicas essenciais.',
      thumbnail: 'https://via.placeholder.com/150',
      videoUrl: 'https://www.youtube.com/embed/3JZ_D3ELwOQ'
    }
  ];
}
