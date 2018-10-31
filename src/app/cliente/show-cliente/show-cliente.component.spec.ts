import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowClienteComponent } from './show-cliente.component';
import { NewClienteComponent } from '../new-cliente/new-cliente.component';
import { ListClienteComponent } from '../list-cliente/list-cliente.component';
import { EditClienteComponent } from '../edit-cliente/edit-cliente.component';
import { RouterModule } from '@angular/router';
import { routes } from 'app/routes';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { AppService } from 'app/app.service';
import { ClienteService } from '../cliente.service';

describe('ShowClienteComponent', () => {
  let component: ShowClienteComponent;
  let fixture: ComponentFixture<ShowClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NewClienteComponent,
        ShowClienteComponent,
        ListClienteComponent,
        EditClienteComponent
      ],
      imports: [
        RouterModule.forRoot(routes),
        FormsModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' },
        AppService,
        ClienteService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
