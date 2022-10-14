import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../../services/skills.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  pathToLogos = '../../../../assets/logos/';
  constructor(public skills: SkillsService) {}

  ngOnInit(): void {}
}
