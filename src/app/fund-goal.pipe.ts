import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';

@Pipe({
  name: 'fundGoal'
})
export class FundGoalPipe implements PipeTransform {

  transform(input: Project[], costRating) {
    const output: Project[] = [];
    if (costRating === 'cheap') {
      for (let i = 0; i < input.length; i++) {
        if (input[i].fundsGoal < 33000) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (costRating === 'medium') {
      for (let i = 0; i < input.length; i++) {
        if (input[i].fundsGoal >= 33000 && input[i].fundsGoal < 66000) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (costRating === 'expensive') {
      for (let i = 0; i < input.length; i++) {
        if (input[i].fundsGoal >= 100000) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
