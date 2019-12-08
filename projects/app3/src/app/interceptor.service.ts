import { Injectable } from "@angular/core";
import { HttpInterceptor } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class InterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(req, next) {
    let token = JSON.parse(localStorage.getItem("token")).token;

    let tokenObj = req.clone({
      setHeaders: {
        Authorization: "Bearer " + token
      }
    });
    return next.handle(tokenObj);
  }
}
