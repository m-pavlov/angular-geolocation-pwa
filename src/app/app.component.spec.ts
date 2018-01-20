import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content/content.component';
import { LangPipe } from './content/pipes/lang.pipe';
import { ViewTypeComponent } from './content/view-type/view-type.component';
import { DecimalPipe } from './content/pipes/decimal.pipe';
import { MinutesPipe } from './content/pipes/minutes.pipe';
import { LangComponent } from './content/lang/lang.component';
import { DataService } from './content/data.service';
import { LangService } from './content/lang.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule        
      ],
      declarations: [
        AppComponent,
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
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  // it(`should have as title 'Geolocation Pwa'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   console.log(fixture);
  //   expect(app.title).toEqual('Geolocation Pwa');
  // }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
});
