import { Component, OnInit, Input } from '@angular/core';
import { HEADER_OPTIONS } from '../../consts/header-options';
import { EMPHASIS_OPTIONS } from '../../consts/emphasis-options';
import { FormControl } from '@angular/forms';
import { IOption } from '../../interfaces/option';

@Component({
  selector: 'lib-ngx-lib-markdown-editor',
  templateUrl: 'ngx-lib-markdown-editor.component.html',
  styleUrls: ['ngx-lib-markdown-editor.component.scss']
})
export class NgxLibMarkdownEditorComponent implements OnInit {
  public readonly HEADER_OPTIONS = HEADER_OPTIONS;
  public readonly EMPHASIS_OPTIONS = EMPHASIS_OPTIONS;
  @Input() public control: FormControl;

  constructor() { }

  ngOnInit() {
  }

  handleOption(option: IOption) {
    const text = this.control.value;
    const optionTemplate = option.template.replace('%', option.example);
    console.warn(text);
    this.control.setValue(`${text || ''}${optionTemplate}`);
  }

}
