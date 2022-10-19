import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../services/projects.service';

@Pipe({
  name: 'filterBySize',
})
export class FilterBySizePipe implements PipeTransform {
  transform(projectArray: Project[], size: number): Project[] {
    return projectArray.slice(0, size);
  }
}
