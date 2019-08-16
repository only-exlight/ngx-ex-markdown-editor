import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { HEADER_OPTIONS } from '../../consts/header-options';
import { EMPHASIS_OPTIONS } from '../../consts/emphasis-options';
import { LIST_OPTIONS } from '../../consts/list-options';
import { TYPOGRAPHIC_OPTIONS } from '../../consts/typographic-options';
import { CODE_OPTIONS, IMAGE_OPTION, LINK_OPTION, SEPARATOR_OPTION } from '../../consts/other-options';
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
  public readonly LIST_OPTIONS = LIST_OPTIONS;
  public readonly TYPOGRAPHIC_OPTIONS = TYPOGRAPHIC_OPTIONS;
  public readonly CODE_OPTIONS = CODE_OPTIONS;
  public readonly OTHER_OPTIONS = [IMAGE_OPTION, LINK_OPTION, SEPARATOR_OPTION];

  public selectionStart: number;
  public selectionEnd: number;

  public strNum = 0;
  public colNum = 0;
  public strings: string[] = [''];

  @Input() public control: FormControl;
  @ViewChild('mrkdwn', {
    read: false
  }) private mrkdwnArea: ElementRef<HTMLTextAreaElement>;

  constructor() { }

  get haveSelected(): boolean {
    return this.selectionStart !== this.selectionEnd;
  }

  ngOnInit() {
    console.warn(this.mrkdwnArea.nativeElement.selectionStart);
  }

  handleOption(option: IOption) {
    const text: string = this.control.value;
    if (this.haveSelected) {
      let selectedText = text.slice(this.selectionStart, this.selectionEnd);
      selectedText = option.template.replace('%', selectedText);
      const p1 = text.slice(0, this.selectionStart);
      const p2 = text.slice(this.selectionEnd, text.length);
      this.control.setValue(`${p1}${selectedText}${p2}`);
    } else {
      const optionTemplate = option.template.replace('%', option.example);
      this.control.setValue(`${text || ''}${optionTemplate}`);
    }
  }

  selectText(e: Event) {
    this.selectionStart = this.mrkdwnArea.nativeElement.selectionStart;
    this.selectionEnd = this.mrkdwnArea.nativeElement.selectionEnd;
    console.warn(this.selectionStart, this.selectionEnd);
  }

  focusArea() {
    this.selectionStart = this.mrkdwnArea.nativeElement.selectionStart;
    this.selectionEnd = this.mrkdwnArea.nativeElement.selectionEnd;
  }

  handleInput() {
    const text: string = this.control.value;
    this.strings = text.split('\n');
  }

  test() {
    console.warn(this.mrkdwnArea.nativeElement);
    console.warn(this);
  }

}
