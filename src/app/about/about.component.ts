import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GoalDataService } from '../goal-data.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  goals:[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private goalService : GoalDataService
  ) { 
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit(): void {
    this.goalService.goal.subscribe(res =>  this.goals = res);
  }

  clickMeBack(){
    this.router.navigate(['']);
  }
}
