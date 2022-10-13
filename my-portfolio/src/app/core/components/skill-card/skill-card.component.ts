import { Component, Input, OnInit } from '@angular/core';
import { skill } from '../../services/skills.service';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss'],
})
export class SkillCardComponent implements OnInit {
  @Input() skill!: skill;
  pathToLogos = '../../../../assets/logos/';

  constructor() {}

  ngOnInit(): void {}
}
