import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { WeatherData } from '../weather-model/weather-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getweatherData(cityName: string): Observable<WeatherData>{
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
      headers: new HttpHeaders()
        .set(environment.XRapidAPIHost, environment.XRapidAPIHostvalue)
        .set(environment.XRapidAPIKey, environment.XRapidAPIKeyValue),
      params: new HttpParams()
        .set('city', cityName)
        .set('units', 'mertic')
        .set('mode', 'json'),
    });
  }
}
