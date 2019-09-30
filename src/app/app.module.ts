import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { DxButtonModule, DxSchedulerModule } from "devextreme-angular";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DxButtonModule, DxSchedulerModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
