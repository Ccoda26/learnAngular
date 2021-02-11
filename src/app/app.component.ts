
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuth = false;
 
  lastUpdate: Promise<Date> = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    }
  );


  appareils = [
    {
      name : "Machine à laver",
      status : "éteint"
    },
    {
      name : "Ordinateur",
      status : "allumé"
    },
    {
      name : "Sèche linge",
      status : "éteint"
    }
  ];

  

  onAllumer(){
    console.log("on allume tout !");
  }

  constructor(){
    setTimeout(
      ()=> {
        this.isAuth = true;
      },4000
    );
  }

}
