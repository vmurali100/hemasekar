import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  constructor(private _http: HttpClient) {}
  getHTMLContents(subject) {
    // let HTMLTopics = [];
    // let topicsArray = HTMLString.split(";");
    // topicsArray.map(topic => {
    //   let obj = { topicName: topic };
    //   obj["isCovered"] = false;
    //   obj["subTopics"] = [];
    //   this._http.post("http://localhost:3001/ReactJS", obj).subscribe(res => {
    //     console.log("All Subjects Added");
    //   });
    //   // HTMLTopics.push(obj);
    // });
    // return HTMLTopics;
    return this._http.get("http://localhost:3000/" + subject);
  }
}
