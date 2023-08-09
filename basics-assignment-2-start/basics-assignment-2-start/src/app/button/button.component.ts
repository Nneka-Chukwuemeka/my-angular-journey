import { Component } from "@angular/core";
@Component({
  selector: "app-buttons",
  templateUrl: "./button.component.html",
})
export class ButtonComponent {
  username: string = "";
  checkUsername: boolean = false;

  updateUsername(event: any) {
    if ((<HTMLInputElement>event.target).value.length > 0) {
      this.checkUsername = true;
      console.log(this.checkUsername);
      console.log((<HTMLInputElement>event.target).value.length);
    } else {
      this.checkUsername = false;
      console.log(this.checkUsername);
      console.log((<HTMLInputElement>event.target).value.length);
    }
  }
  resetUsername() {
    this.username = "";
  }
}
