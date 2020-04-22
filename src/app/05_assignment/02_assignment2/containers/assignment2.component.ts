import { Component, Input } from '@angular/core';

interface TodosItems {
    id: string;
    text: string;
    description: string;
    completed: boolean;
  }
@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component {
@Input()
todos:TodosItems[];
selected:boolean
select(task) {
    this.selected =task; 
  };
  isActive(task) {
    return this.selected ===task;
  }; 
}
