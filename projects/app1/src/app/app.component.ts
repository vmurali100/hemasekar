import { Component } from "@angular/core";
import { CommonService } from "projects/app1/common.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  subject = "HTML";
  constructor(private commonService: CommonService) {}
  title = "app1";
  ngOnInit() {}
  getTopics() {
    this.commonService.getHTMLContents(this.subject).subscribe(res => {
      console.log(res);
    });
  }
}
