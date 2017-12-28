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
      this.errors$.next('Geolocation is not available on your device');
    }

    navigator.geolocation
      .getCurrentPosition(this.success.bind(this), this.failed.bind(this));
  }

  private success(data: Position) {

    this.location$
      // .next(data.coords);
      .next(this.setAccuracy( this.fakeData() ) );
    this.errors$
      .next('');
  }

  private failed() {
    this.errors$
      .next('Geolocation failed');    
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

    // if (navigator && navigator.permissions) {
    //   checkPermission();
    // }    
  // checkPermission(){
  //   navigator.permissions.query({name: 'geolocation'})
  //       .then( result => {
  //           if ( result.state === 'granted') {
  //               ui.hide('permission_request');
  //           }
  //       });
  // }

  fakeData() {
    return {
      accuracy: 2216,
      altitude: 1350,
      altitudeAccuracy: 43,
      heading: null,
      latitude: 55.432592299999996,
      longitude: 65.34728559999999,
      speed:null      
    }
  }
}
