import { Component } from '@angular/core';
import { questions_and_responses,invalid_responses,byMistake_responses } from './questions_and_responses/questions_responses';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() { }

  ngOnInit(): void {  
  }
}