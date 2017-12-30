import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AppCoords } from "../app-coords.interface";
import { LangService } from '../lang.service';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  viewType: string;
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
    
    this.langService.currentTranslation$.subscribe( translation => 
      this.currentLang = translation 
    );

    this.dataService.getLocation();

    setInterval(() => {
      this.dataService.getLocation();
    }, 10000);
  }

  onTypeChange(type) {
    this.viewType = type;
  }  

}
