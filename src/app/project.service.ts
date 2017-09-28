import { Injectable } from '@angular/core';
import { Project } from './project.model';
import {AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
  this.projects = database.list('projects');
  }

  getProjects() {
    return this.projects;
  }

  getProjectById(projectId: string) {
    return this.database.object('projects/' + projectId);
  }

  addContribution(updatedFunds: number, goal: number, key: string) {
    const projectEntryInFireBase = this.getProjectById(key);
    projectEntryInFireBase.update({fundsRaised: updatedFunds});
    projectEntryInFireBase.update({percentageComplete: ((updatedFunds / goal) * 100)});
  }

  addProjectToFirebase(newProject: Project) {
    this.projects.push(newProject);
  }

  deleteProjectFromFirebase(deadProject) {
    const projectEntryInFirebase = this.getProjectById(deadProject.$key);
    projectEntryInFirebase.remove();
  }
}
