import { TestBed } from '@angular/core/testing';

import { NgxLibMarkdownEditorService } from './ngx-lib-markdown-editor.service';

describe('NgxLibMarkdownEditorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxLibMarkdownEditorService = TestBed.get(NgxLibMarkdownEditorService);
    expect(service).toBeTruthy();
  });
});
