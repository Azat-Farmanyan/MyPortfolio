import { Injectable } from '@angular/core';
import { SkillsService } from './skills.service';

export interface Project {
  title: string;
  description: string;
  img: string;
  tools: any[];
  url: string;
  sourceCodeUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: Project[] = [
    {
      title: 'Bookshop',
      description:
        'The user will be able to view the catalog of books, see the description of a particular book, add a book to the basket, select a suitable date and address for delivery.',
      img: 'bookshop.jpg',
      tools: [
        this.skill('html'),
        this.skill('CSS'),
        this.skill('JavaScript'),
        this.skill('Sass'),
        this.instrument('vscode'),
        this.instrument('Adobe Photoshop'),
        this.instrument('Figma'),
      ],
      url: 'https://azat-farmanyan.github.io/BookShop/pages/order_form/',
      sourceCodeUrl: 'https://github.com/Azat-Farmanyan/BookShop',
    },
    {
      title: 'English For Kids',
      description:
        'The application is designed for children who want to learn English. The application has 2 modes: training mode, where children can learn new words, and game mode, where children can play by guessing the picture.',
      img: 'englishforkids.jpg',
      tools: [
        this.skill('html'),
        this.skill('CSS'),
        this.skill('Sass'),
        this.skill('JavaScript'),
        this.instrument('vscode'),
        this.instrument('Adobe Photoshop'),
        this.instrument('Figma'),
      ],
      url: 'https://azat-farmanyan.github.io/English-for-kids/English-for-kids/pages/main/#',
      sourceCodeUrl: 'https://github.com/Azat-Farmanyan/English-for-kids',
    },
    {
      title: 'English For Kids',
      description:
        'The application is designed for children who want to learn English. The application has 2 modes: training mode, where children can learn new words, and game mode, where children can play by guessing the picture.',
      img: 'englishforkids.jpg',
      tools: [
        this.skill('html'),
        this.skill('CSS'),
        this.skill('Sass'),
        this.skill('JavaScript'),
        this.instrument('vscode'),
        this.instrument('Adobe Photoshop'),
        this.instrument('Figma'),
      ],
      url: 'https://azat-farmanyan.github.io/English-for-kids/English-for-kids/pages/main/#',
      sourceCodeUrl: 'https://github.com/Azat-Farmanyan/English-for-kids',
    },
    {
      title: 'English For Kids',
      description:
        'The application is designed for children who want to learn English. The application has 2 modes: training mode, where children can learn new words, and game mode, where children can play by guessing the picture.',
      img: 'englishforkids.jpg',
      tools: [
        this.skill('html'),
        this.skill('CSS'),
        this.skill('Sass'),
        this.skill('JavaScript'),
        this.instrument('vscode'),
        this.instrument('Adobe Photoshop'),
        this.instrument('Figma'),
      ],
      url: 'https://azat-farmanyan.github.io/English-for-kids/English-for-kids/pages/main/#',
      sourceCodeUrl: 'https://github.com/Azat-Farmanyan/English-for-kids',
    },
  ];
  skill(name: string) {
    return this.skillsService.getSkill(name);
  }
  instrument(name: string) {
    return this.skillsService.getInstrument(name);
  }
  constructor(private skillsService: SkillsService) {}
}
