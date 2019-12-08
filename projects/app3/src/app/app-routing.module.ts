import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserStocksComponent } from "./user-stocks/user-stocks.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "userstocks", component: UserStocksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
