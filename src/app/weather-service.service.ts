import { Injectable } from '@angular/core';
import { Observable, pipe, from } from 'rxjs';
import { Main } from './main';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { Weather } from './weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  baseUrl:string ='https://api.openweathermap.org/data/2.5/weather?q=';
  ApiKey:string='&appid=f66292187ed99ccc1090d8c41339fa56';
  constructor(private httpClient:HttpClient) { }
  getWeather(key):Observable<Main>{
    let localUrl=`${this.baseUrl}${key}${this.ApiKey}`
    console.log(localUrl);
    return this.httpClient.get<GetWeatherRespoce>(localUrl).pipe(
      map(responce=> responce.main)
    );
  }
  getWeatherMain(key):Observable<Weather[]>{
    let localUrl=`${this.baseUrl}${key}${this.ApiKey}`
    console.log(localUrl);
    return this.httpClient.get<GetMainWeatherResponce>(localUrl).pipe(
      map(responce=> responce.weather)
    );
  }
}
interface GetWeatherRespoce{
  main:Main;
}
interface GetMainWeatherResponce{
  weather:Weather[];
}