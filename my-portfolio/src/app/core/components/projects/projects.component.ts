import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  constructor(public projectService: ProjectsService) {}
  projectsAmount = this.projectService.projects.length;
  cuurentProjecstAmount = 3;
  ngOnInit(): void {}
  viewAll() {
    this.cuurentProjecstAmount = this.projectsAmount;
  }
}
