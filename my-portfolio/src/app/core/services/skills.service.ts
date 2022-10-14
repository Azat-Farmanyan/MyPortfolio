import { Injectable } from '@angular/core';

export interface skill {
  name: string;
  text: string;
  img: string;
  color: string;
}
export interface instrument {
  img: string;
  name: string;
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
  instruments: instrument[] = [
    { img: 'git.png', name: 'Git' },
    { img: 'devtools.png', name: 'devtools' },
    { img: 'Figma logo.png', name: 'Figma' },
    { img: 'Adobe logo.png', name: 'Adobe Photoshop' },
    { img: 'illustrator logo.png', name: 'illustrator' },
    { img: 'Sublime logo.png', name: 'Sublime' },
    { img: 'vscode-original logo.png', name: 'vscode' },
    { img: 'git.png', name: 'Git' },
    { img: 'devtools.png', name: 'devtools' },
    { img: 'Figma logo.png', name: 'Figma' },
    { img: 'Adobe logo.png', name: 'Adobe Photoshop' },
    { img: 'illustrator logo.png', name: 'illustrator' },
    { img: 'Sublime logo.png', name: 'Sublime' },
    { img: 'vscode-original logo.png', name: 'vscode' },
    { img: 'git.png', name: 'Git' },
    { img: 'devtools.png', name: 'devtools' },
    { img: 'Figma logo.png', name: 'Figma' },
    { img: 'Adobe logo.png', name: 'Adobe Photoshop' },
    { img: 'illustrator logo.png', name: 'illustrator' },
    { img: 'Sublime logo.png', name: 'Sublime' },
    { img: 'vscode-original logo.png', name: 'vscode' },
    { img: 'git.png', name: 'Git' },
    { img: 'devtools.png', name: 'devtools' },
    { img: 'Figma logo.png', name: 'Figma' },
    { img: 'Adobe logo.png', name: 'Adobe Photoshop' },
    { img: 'illustrator logo.png', name: 'illustrator' },
    { img: 'Sublime logo.png', name: 'Sublime' },
    { img: 'vscode-original logo.png', name: 'vscode' },
    { img: 'git.png', name: 'Git' },
    { img: 'devtools.png', name: 'devtools' },
    { img: 'Figma logo.png', name: 'Figma' },
    { img: 'Adobe logo.png', name: 'Adobe Photoshop' },
    { img: 'illustrator logo.png', name: 'illustrator' },
    { img: 'Sublime logo.png', name: 'Sublime' },
    { img: 'vscode-original logo.png', name: 'vscode' },
  ];
  constructor() {}
}
