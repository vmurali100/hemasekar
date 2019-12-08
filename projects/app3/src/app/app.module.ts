import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { UserStocksComponent } from "./user-stocks/user-stocks.component";
import { LoginComponent } from "./login/login.component";
import { InterceptorService } from "./interceptor.service";

@NgModule({
  declarations: [AppComponent, UserStocksComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
