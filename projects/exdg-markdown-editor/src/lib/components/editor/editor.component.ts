import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'exdg-markdown-editor',
  templateUrl: 'editor.component.html'
})
export class MarkdownEditorComponent {
  @Input() public control: FormControl;
}
