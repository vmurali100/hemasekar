import { NgModule } from "@angular/core";
import { AboutComponent } from "./about.component";
import { AboutRoutingModule } from "./about.routing";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, AboutRoutingModule]
})
export class AboutModule {}
