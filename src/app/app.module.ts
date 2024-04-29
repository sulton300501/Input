import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetAllComponent } from './component/get-all/get-all.component';
import { HttpClientModule } from '@angular/common/http';
import { PostDataComponent } from './component/post-data/post-data.component';


@NgModule({
  declarations: [
    AppComponent,
    GetAllComponent,
    PostDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
