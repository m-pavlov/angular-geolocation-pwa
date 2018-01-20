import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentComponent } from './content.component';
import { LangPipe } from '../pipes/lang.pipe';
import { DecimalPipe } from '../pipes/decimal.pipe';
import { MinutesPipe } from '../pipes/minutes.pipe';
import { ViewTypeComponent } from '../view-type/view-type.component';
import { LangComponent } from '../lang/lang.component';
import { DataService } from '../data.service';
import { LangService } from '../lang.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [ 
        ContentComponent,
        LangPipe,
        DecimalPipe,
        MinutesPipe,
        ViewTypeComponent,
        LangComponent
      ],
      providers: [
        HttpClient,
        DataService,
        LangService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
