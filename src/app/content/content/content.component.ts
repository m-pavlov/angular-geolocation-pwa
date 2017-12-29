import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ViewType } from '../view-type.type';
import { AppCoords } from "../app-coords.interface";
import { LangService } from '../lang.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  viewType: ViewType = 'decimal';
  position: AppCoords;
  errorType: string;
  currentLang: Object;

  constructor(
    private dataService: DataService,
    private langService: LangService
  ) { }

  ngOnInit() {
    this.dataService.location$.subscribe( (pos: AppCoords) => {
      this.position = pos;
    });

    this.dataService.errors$.subscribe( (type: string) => {
      this.errorType = type;
    });
    
    this.langService.currentTranslation.subscribe( translation => 
      this.currentLang = translation 
    );

    this.dataService.getLocation();

    setInterval(() => {
      this.dataService.getLocation();
    }, 5000);
  }

  onTypeChange(type) {
    this.viewType = type;
  }  

}
