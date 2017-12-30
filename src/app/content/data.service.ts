import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { AppCoords } from "./app-coords.interface";

@Injectable()
export class DataService {
  location$: Subject<AppCoords> = new Subject();
  errors$: Subject<string> = new Subject();

  private api = navigator.geolocation;

  constructor() { }

  getLocation(){
    if ( ! navigator.geolocation ) {
      this.errors$.next('not-available');
    }

    navigator.geolocation
      .getCurrentPosition(
        this.success.bind(this), 
        this.failed.bind(this), 
        {
          enableHighAccuracy: true,
          timeout: 5000
        }
      );
  }

  private success(data: Position) {

    this.location$
      .next( this.setAccuracy( data.coords ) );
    this.errors$
      .next('');
  }

  private failed(e) {
    this.errors$
      .next(e.code === 1 ? 'permission' : 'failed');    
    this.location$
      .next(null)
  }

  private setAccuracy(data: Coordinates): AppCoords {
    return Object.assign(data, {
      accuracyLatitude: data.accuracy ? this.metersToLatitude(data.accuracy) : null,
      accuracyLongitude: data.accuracy ? this.metersToLongitude(data.accuracy) : null,
    });
  }

  private metersToLatitude(value: number): number {
    return value / ( 111321.38 * Math.cos( value * Math.PI / 180) );
  }

  private metersToLongitude(value: number): number {
    return value / 111000;
  }

}
