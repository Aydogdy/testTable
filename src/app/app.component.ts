import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

   persons: Array<{"email": string, "name": string, "age": number}>;
   inputName : string = '';
  constructor(){
    this.persons = [
      {"email": "test@gmail.com", "name": "Иванов Иван Иваноыич", "age": 24},
      {"email": "test@gmail.com", "name": "Иванов Иван Иваноыич", "age": 24},
      {"email": "test@gmail.com", "name": "Иванов Иван Иваноыич", "age": 24},
      {"email": "test@gmail.com", "name": "Иванов Иван Иваноыич", "age": 24},
      {"email": "test@gmail.com", "name": "Иванов Иван Иваноыич", "age": 24},
      {"email": "test@gmail.com", "name": "Иванов Иван Иваноыич", "age": 24},
      {"email": "test@gmail.com", "name": "Иванов Иван Иваноыич", "age": 24}
    ]
  }



  
}
