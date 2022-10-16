import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../services/projects.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
  @Input() project!: Project;
  pathToLogos = '../../../../assets/logos/';
  pathToImages = '../../../../assets/images/';
  pathArrowDown = '../../../../assets/icons/arrow-down-white.png';
  pathArrowUp = '../../../../assets/icons/arrow-up-white.png';

  descriptionStatus = false;
  //<img src="../../../../assets/bg/pc-2-bg.png"
  constructor() {}

  ngOnInit(): void {}
  description() {
    this.descriptionStatus = !this.descriptionStatus;
  }
}
