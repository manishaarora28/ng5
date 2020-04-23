 import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { GoalDataService } from '../goal-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [

    trigger('goals', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))]), {optional: true}),

        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 0, transform: 'translateY(-75%)', offset: 1}),
          ]))]), {optional: true})
      ])
    ])

  ]
})
export class HomeComponent implements OnInit {
btnText:string='Add an item';
goalCount:number;
goalText:string='add a goal';
goals=[];
  constructor(private goalService : GoalDataService) { }

  ngOnInit(){    
    this.goalService.goal.subscribe(res => this.goals = res);
    this.goalCount = this.goals.length;
    this.goalService.changeGoal(this.goals);
  }
  addItem(){
this.goals.push(this.goalText);
this.goalCount = this.goals.length;
this.goalText = '';
this.goalService.changeGoal(this.goals);
  }

  removeItem(i){
    this.goals.splice(i,1);
    this.goalService.changeGoal(this.goals);
  }

}
