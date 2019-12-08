import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  constructor(private _http: HttpClient) {}

  loginUser(obj) {
    return this._http.post("http://localhost:9090/api/v1/login", obj);
  }

  getUserStocks() {
    return this._http.get("http://localhost:9090/api/v1/dashboard");
  }
}
