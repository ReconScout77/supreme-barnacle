import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
  providers: [ProjectService]
})
export class ProjectDetailsComponent implements OnInit {
  projectId: string;
  projectToDisplay;
  projectToUpdate;
  showDonationForm = false;
  showEditForm = false;
  name;

  constructor(private route: ActivatedRoute, private location: Location, private projectService: ProjectService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
    });
    this.projectToDisplay = this.projectService.getProjectById(this.projectId);

    this.projectToDisplay.subscribe(dataLastEmittedFromObserver => {
      this.name = dataLastEmittedFromObserver.name;
      console.log(this.name);
    });

  }


  donationForm() {
    this.showDonationForm = true;
  }

  closeDonationForm() {
    this.showDonationForm = false;
  }

  submitDonationForm(money: number) {

    let fundsRaised: number;
    let goal: number;
    let key: string;

    this.showDonationForm = false;

    this.projectToDisplay.subscribe(dataLastEmittedFromObserver => {
      fundsRaised = dataLastEmittedFromObserver.fundsRaised;
      key = dataLastEmittedFromObserver.$key;
      goal = dataLastEmittedFromObserver.fundsGoal;
    });

    const updatedFunds = +fundsRaised + +money;
    this.projectService.addContribution(updatedFunds, goal, key);
  }

  editForm() {
    this.showEditForm = true;
  }
}
