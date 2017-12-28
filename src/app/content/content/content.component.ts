import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ViewType } from '../view-type.type';
import { AppCoords } from "../app-coords.interface";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  viewType: ViewType = 'decimal';
  position: AppCoords;

  constructor(
    private srv: DataService
  ) { }

  ngOnInit() {
    this.srv.location$.subscribe( (pos) => {
      this.position = pos;
      console.log(pos);
    });
    this.srv.getLocation();
  }

  onTypeChange(type){
    this.viewType = type;
  }  
}
