import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLibMarkdownEditorComponent } from './ngx-lib-markdown-editor.component';

describe('NgxLibMarkdownEditorComponent', () => {
  let component: NgxLibMarkdownEditorComponent;
  let fixture: ComponentFixture<NgxLibMarkdownEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxLibMarkdownEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLibMarkdownEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
