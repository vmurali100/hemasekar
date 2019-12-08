import { Component, OnInit } from "@angular/core";
import { CommonService } from "projects/app3/common.service";

@Component({
  selector: "app-user-stocks",
  templateUrl: "./user-stocks.component.html",
  styleUrls: ["./user-stocks.component.css"]
})
export class UserStocksComponent implements OnInit {
  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.getUserStocks();
  }

  getUserStocks() {
    this.commonService.getUserStocks().subscribe(res => {
      console.log(res);
    });
  }
}
