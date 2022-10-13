import { Injectable } from '@angular/core';

export interface skill {
  name: string;
  text: string;
  img: string;
  color: string;
}

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  skills: skill[] = [
    {
      name: 'html',
      text: 'Html: HyperText Markup Language',
      img: 'html5 logo.png',
      color: '#F16529',
    },
    {
      name: 'CSS',
      text: 'CSS, Cascading Style Sheets',
      img: 'CSSlogo.png',
      color: '#1C88C7',
    },
    {
      name: 'JavaScript',
      text: 'JavaScript, often abbreviated as JS',
      img: 'javascript-1 logo.png',
      color: '#FBDE34',
    },
    {
      name: 'Sass',
      text: 'Sass, Syntactically Awesome Style Sheets',
      img: 'file_type_scss2logo.png',
      color: '#CC6699',
    },
    {
      name: 'TypeScript',
      text: 'TypeScript is JavaScript with syntax for types.',
      img: 'TypeScriptlogo.png',
      color: '#017ACB',
    },
    {
      name: 'Angular',
      text: 'Angular is a web framework ',
      img: 'Angularlogo.png',
      color: '#DD0031',
    },
  ];

  constructor() {}
}
