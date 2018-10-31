import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ShowFuncionarioComponent } from './show-funcionario.component';
import { NewFuncionarioComponent } from '../new-funcionario/new-funcionario.component';
import { ListFuncionarioComponent } from '../list-funcionario/list-funcionario.component';
import { routes } from '../../routes';
import { FuncionarioService } from '../funcionario.service';
import { EditFuncionarioComponent } from '../edit-funcionario/edit-funcionario.component';
import { AppService } from '../../app.service';

describe('ShowFuncionarioComponent', () => {
  let component: ShowFuncionarioComponent;
  let fixture: ComponentFixture<ShowFuncionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NewFuncionarioComponent,
        ShowFuncionarioComponent,
        ListFuncionarioComponent,
        EditFuncionarioComponent
      ],
      imports: [
        RouterModule.forRoot(routes),
        FormsModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' },
        AppService,
        FuncionarioService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
