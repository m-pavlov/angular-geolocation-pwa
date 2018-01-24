import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DataService } from '@app/content/data.service';
import { LangService } from '@app/content/lang.service';

import { ContentComponent } from '@app/content/content/content.component';
import { LangComponent } from '@app/content/lang/lang.component';
import { ViewTypeComponent } from '@app/content/view-type/view-type.component';
import { DecimalPipe } from '@app/content/pipes/decimal.pipe';
import { MinutesPipe } from '@app/content/pipes/minutes.pipe';
import { LangPipe } from '@app/content/pipes/lang.pipe';

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
