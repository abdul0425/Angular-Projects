import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl : './app.component.html',
  styleUrls : ['./app.component.css']
})
export class AppComponent {
  myName = 'Abdul Majid Alam';
  imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt1Eb_4uHgjrXHeAYi_9nYNJ62Y1EpSRMeluyqq9jV8Q&usqp=CAU&ec=48665701';


  greetMessage :string = ''

  getName(){
    return this.myName;
  }

  onClick(){
    console.log('Hey Coders');
    this.greetMessage = 'Angular Developer Is In Process !';
  }
}
