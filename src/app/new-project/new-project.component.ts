import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css'],
  providers: [ProjectService]
})
export class NewProjectComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  addProject(name: string, manager: string, description: string, goal: number, use: string, rewards: string) {

    const newProject: Project = new Project(name, manager, description, +goal, use, rewards);
    console.log(newProject);

    this.projectService.addProjectToFirebase(newProject);
  }
}
