import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataService } from './data.service';

import { ContentComponent } from './content/content.component';
import { LangComponent } from './lang/lang.component';
import { ViewTypeComponent } from './view-type/view-type.component';
import { DecimalPipe } from './pipes/decimal.pipe';
import { MinutesPipe } from './pipes/minutes.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ContentComponent, 
    LangComponent, 
    ViewTypeComponent, DecimalPipe, MinutesPipe
  ],
  providers: [
    DataService
  ],
  exports: [
    ContentComponent
  ]
})
export class ContentModule { }
