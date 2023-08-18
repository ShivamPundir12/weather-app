import { WeatherService } from './service/weather.service';
import { Component , OnInit} from '@angular/core';
import { WeatherData } from './weather-model/weather-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cityName: string = "Wellington";
  weatherData?: WeatherData;

  constructor(private weatherservices: WeatherService){}
  ngOnInit(): void{
    this.getweatherData(this.cityName);
  }

  onSubmit(){
    this.getweatherData(this.cityName);
    this.cityName = '';
  }

  private getweatherData(cityName:string){
    this.weatherservices.getweatherData(cityName).subscribe({
      next:(respose)=>{
        this.weatherData= respose;
        console.log(respose);
      }
    })
  }
}
