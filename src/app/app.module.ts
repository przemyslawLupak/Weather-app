import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchingComponent } from './searching/searching.component';
import { WeatherService } from './weather-service.service';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes=[
  {path:'weather',component: SearchingComponent},
  {path:'search/:keyword',component: WeatherComponent},
  {path:'',redirectTo:'weather',pathMatch:'full'},
];
@NgModule({
  declarations: [
    AppComponent,
    SearchingComponent,
    WeatherComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
