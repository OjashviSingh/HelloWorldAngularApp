import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world-angular-app';
  imgUrl = "../assets/BridgeLabzLogo.svg"
  url = "https://www.bridgelabz.com"
  userName: string = "";
  nameError: string ="";

  ngOnInit():void{
    this.title = "Hello from BridgeLabz"
    this.imgUrl = "../assets/BridgeLabzLogo.svg"
  }

  onClick($event: any){
    console.log("Save button is clicked", $event)
    window.open(this.url, "_blank");
  }

  onInput($event: any){
    console.log("Change Event Occurred!", $event.data);
    const nameRegex = RegExp('^[A-Z][a-zA-Z]{2,}$');
    if(nameRegex.test(this.userName)){
      this.nameError = "";
      return;
    }
    this.nameError = "Name is Incorrect";
  }
}
