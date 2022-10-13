import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { SocialMediaService } from '../../services/social-media.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Input() lockPage: boolean = false;
  helloWorld = true;
  info = false;
  iconPath = '../../../../assets/icons/';
  list = [
    'Hello World!',
    'I am Azat Farmanyan, a Front-end Developer and this is my online portfolio',
  ];
  aboutMe = [
    'Quotes about programming:',
    '“First, solve the problem. Then, write the code.“ - John Johnson',
    '“Experience is the name everyone gives to their mistakes.” – Oscar Wilde',
    '“ In order to be irreplaceable, one must always be different” – Coco Chanel',
    '“Java is to JavaScript what car is to Carpet.” – Chris Heilmann',
    '“Knowledge is power.” – Francis Bacon',
    '“ Code is like humor. When you have to explain it, it’s bad.” – Cory House',
    '“Fix the cause, not the symptom.” – Steve Maguire',
    '“Optimism is an occupational hazard of programming: feedback is the treatment. “ Kent Beck',
    '“When to use iterative development? You should use iterative development only on projects that you want to succeed.” – Martin Fowler',
    '“Simplicity is the soul of efficiency.” – Austin Freeman',
    '“Before software can be reusable it first has to be usable.” – Ralph Johnson',
    '“Make it work, make it right, make it fast.” – Kent Beck',
  ];
  constructor(public socialMedias: SocialMediaService) {}
  @ViewChild('mainTitle', { static: true }) mainTitle!: ElementRef;

  ngOnInit(): void {
    setTimeout(() => {
      this.helloWorld = false;
    }, 11500);
  }
}
