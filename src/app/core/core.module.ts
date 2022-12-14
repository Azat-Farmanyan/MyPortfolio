import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { SkillCardComponent } from './components/skill-card/skill-card.component';
import { AngularTypewriterEffectModule } from 'angular-typewriter-effect';
import { BorderColorDirective } from './directives/border-color.directive';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FilterBySizePipe } from './pipes/filter-by-size.pipe';
import { ShortTheSentencePipe } from './pipes/short-the-sentence.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ProjectCardComponent,
    SkillCardComponent,
    BorderColorDirective,
    CarouselComponent,
    FilterBySizePipe,
    ShortTheSentencePipe,
  ],
  imports: [CommonModule, AngularTypewriterEffectModule],
  exports: [HomeComponent, AboutComponent, SkillsComponent, ProjectsComponent],
})
export class CoreModule {}
