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
      title: 'Project Management App',
      description:
        'Project management system is an application that helps an individual in a team or group of developers achieve their goals. There are many competitors on the market for my application. The main competitors are the following: Trello, Jira, Redmine, Bitrix24, Yandex Tracker, Asana, GanttPro, Github projects.',
      img: 'proj-man-system.jpg',
      tools: [
        this.skill('Angular'),
        this.skill('html'),
        this.skill('CSS'),
        this.skill('JavaScript'),
        this.skill('Sass'),
        this.skill('TypeScript'),

        this.instrument('vscode'),
        this.instrument('Adobe Photoshop'),
        this.instrument('illustrator'),
        this.instrument('Figma'),
      ],
      url: 'https://fascinating-douhua-c23dc0.netlify.app/',
      sourceCodeUrl: 'https://github.com/Azat-Farmanyan/rs-front-azat',
    },
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
      url: 'https://azat-farmanyan.github.io/BookShop/pages/main/',
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
      title: 'Tic Tac Toe',
      description:
        'Tic-tac-toe (also known as noughts and crosses) is a puzzle game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game.',
      img: 'tic-tac-toe.jpg',
      tools: [
        this.skill('html'),
        this.skill('CSS'),
        this.skill('Sass'),
        this.skill('JavaScript'),
        this.instrument('vscode'),
        this.instrument('Adobe Photoshop'),
        this.instrument('Figma'),
      ],
      url: 'https://azat-farmanyan.github.io/TicTacToe/pages/game/',
      sourceCodeUrl: 'https://github.com/Azat-Farmanyan/TicTacToe',
    },
    {
      title: 'Cozy House - Shelter for pets in Boston',
      description:
        'The site is intended for shelter dogs and cats. On the site you can find all the detailed information about the animals that live in the shelter and are waiting for their owners.',
      img: 'Cozy House.jpg',
      tools: [
        this.skill('html'),
        this.skill('CSS'),
        this.skill('Sass'),
        this.skill('JavaScript'),
        this.instrument('vscode'),
        this.instrument('Adobe Photoshop'),
        this.instrument('Figma'),
      ],
      url: 'https://azat-farmanyan.github.io/shelter/pages/main/index.html',
      sourceCodeUrl: 'https://github.com/Azat-Farmanyan/shelter',
    },
    {
      title: 'Calculator',
      description:
        'Calculator provides simple and advanced mathematical functions in a beautifully designed app. Perform basic calculations such as addition, subtraction, multiplication, and division.',
      img: 'calculator.jpg',
      tools: [
        this.skill('html'),
        this.skill('CSS'),
        this.skill('Sass'),
        this.skill('JavaScript'),
        this.instrument('vscode'),
        this.instrument('Adobe Photoshop'),
        this.instrument('Figma'),
      ],
      url: 'https://azat-farmanyan.github.io/calculator/',
      sourceCodeUrl: 'https://github.com/Azat-Farmanyan/calculator',
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
