import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  providers: [ProjectService]
})
export class ProjectListComponent implements OnInit {

  projects: FirebaseListObservable<any[]>;
  filterByGoal = "allProjects";

  constructor(private router: Router, private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  goToDetailPage(clickedProject) {
    this.router.navigate(['projects', clickedProject.$key]);
  }

  onChange(fundsFilter) {
    this.filterByGoal = fundsFilter;
  }

}
