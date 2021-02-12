
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  posts = [
    {
      title : "le premier post",
      content : "c'est le post 1 trop cool",
      createAt: new Date(),
      loveIt: 'off'
    },
    {
      title : "le deuxieme post",
      content : "c'est le post 2 trop cool",
      createAt: new Date(),
      loveIt: 'on'
    },
    {
      title : "le troisieme post",
      content : "c'est le post 3 trop cool",
      createAt: new Date(),
      loveIt: 'on'
    },
    {
      title : "le quatrieme post",
      content : "c'est le post 4 trop cool",
      createAt: new Date(),
      loveIt: 'off'
    }
  ];
 
constructor(){

}



}
