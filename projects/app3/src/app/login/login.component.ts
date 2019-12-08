import { Component, OnInit } from "@angular/core";
import { CommonService } from "projects/app3/common.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private commonService: CommonService, private router: Router) {}
  title = "app3";
  login(userForm) {
    console.log(userForm.value);
    this.commonService.loginUser(userForm.value).subscribe(res => {
      localStorage.setItem("token", JSON.stringify(res));
      this.router.navigate(["userstocks"]);
    });
  }
  ngOnInit() {}
}
