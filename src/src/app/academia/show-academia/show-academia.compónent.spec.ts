import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ShowAcademiaComponent } from './show-academia.component';
import { NewAcademiaComponent } from '../new-academia/new-academia.component';
import { ListAcademiaComponent } from '../list-academia/list-academia.component';
import { routes } from '../../routes';
import { AcademiaService } from '../academia.service';
import { EditAcademiaComponent } from '../edit-academia/edit-academia.component';
import { AppService } from '../../app.service';

describe('ShowAcademiaComponent', () => {
  let component: ShowAcademiaComponent;
  let fixture: ComponentFixture<ShowAcademiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NewAcademiaComponent,
        ShowAcademiaComponent,
        ListAcademiaComponent,
        EditAcademiaComponent
      ],
      imports: [
        RouterModule.forRoot(routes),
        FormsModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' },
        AppService,
        AcademiaService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAcademiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});