import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DataService } from './data.service';
import { LangService } from './lang.service';

import { ContentComponent } from './content/content.component';
import { LangComponent } from './lang/lang.component';
import { ViewTypeComponent } from './view-type/view-type.component';
import { DecimalPipe } from './pipes/decimal.pipe';
import { MinutesPipe } from './pipes/minutes.pipe';
import { LangPipe } from './pipes/lang.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    ContentComponent,
    LangComponent,
    ViewTypeComponent, DecimalPipe, MinutesPipe, LangPipe
  ],
  providers: [
    DataService,
    LangService,
  ],
  exports: [
    ContentComponent
  ]
})
export class ContentModule { }
