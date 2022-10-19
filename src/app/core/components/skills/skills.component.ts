import { Component, Input, OnInit } from '@angular/core';
import { SkillsService } from '../../services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  constructor(public skills: SkillsService) {}

  ngOnInit(): void {}
}
