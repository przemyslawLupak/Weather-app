import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather-service.service';
import { Main } from '../main';
import { ActivatedRoute } from '@angular/router';
import { Weather } from '../weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  
  
  constructor(private _weatherService:WeatherService, private _activatedRoutes:ActivatedRoute) { }
  keyword:string;
  weather:Main;
  WeatherState:Weather[]; 
  ngOnInit() {
    this.getWeather() 
  }
  call(value:string){
    console.log("call");
    if (value == ("Clouds"))
        return "fas fa-cloud cloud";
    else if (value == ("Rain")||("Drizzle"))
        return "fas fa-cloud-showers-heavy  cloud";
    else if (value == ("Clear"))
        return "fas fa-sun  cloud";
    else
        return "fas fa-wind cloud";
                    
  }
  getWeather(){
     const hasKeyword:boolean = this._activatedRoutes.snapshot.paramMap.has('keyword');
      if(hasKeyword){
      this.keyword = this._activatedRoutes.snapshot.paramMap.get('keyword');

      this._weatherService.getWeather(this.keyword).subscribe(
      data =>  this.weather=data
    )
    this._weatherService.getWeatherMain(this.keyword).subscribe(
      data => this.WeatherState = data
    )
  }
  
  }

}
