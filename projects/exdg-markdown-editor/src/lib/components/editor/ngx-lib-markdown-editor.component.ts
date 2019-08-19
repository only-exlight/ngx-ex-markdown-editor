import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IOption } from '../../interfaces/option';

const LINE_HEIGHT = 16;
@Component({
  selector: 'exdg-markdown-editor',
  templateUrl: 'ngx-lib-markdown-editor.component.html'
})
export class MarkdownEditorComponent implements OnInit {
  public selectionStart: number;
  public selectionEnd: number;

  public strings: string[] = [''];

  public xPosition = 0;
  public yPosition = 0;

  public text = '';

  @Input() public control: FormControl;
  @ViewChild('mrkdwn', {
    read: false
  }) private mrkdwnArea: ElementRef<HTMLTextAreaElement>;
  @ViewChild('input', {
    read: false
  }) private input: ElementRef<HTMLTextAreaElement>;

  constructor() { }

  get haveSelected(): boolean {
    return this.selectionStart !== this.selectionEnd;
  }

  public ngOnInit(): void {
    console.warn(this.mrkdwnArea.nativeElement.selectionStart);
  }

  public handleOption(option: IOption): void {
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

  public selectText(e: Event): void {
    this.selectionStart = this.mrkdwnArea.nativeElement.selectionStart;
    this.selectionEnd = this.mrkdwnArea.nativeElement.selectionEnd;
    console.warn(this.selectionStart, this.selectionEnd);
  }

  public focusArea(): void {
    this.selectionStart = this.mrkdwnArea.nativeElement.selectionStart;
    this.selectionEnd = this.mrkdwnArea.nativeElement.selectionEnd;
  }

  public handleInput(): void {
    this.strings = this.text.split('\n');
  }

  public test(): void {
    console.warn(this.mrkdwnArea.nativeElement);
    console.warn(this);
  }

  public handleEditorClick(e: MouseEvent): void {
    const maxPosition = this.strings.length * LINE_HEIGHT - LINE_HEIGHT;
    const s = e.offsetY % LINE_HEIGHT;
    const positionY = e.offsetY - LINE_HEIGHT + s;
    if (positionY > maxPosition) {
      this.yPosition = maxPosition;
      this.xPosition = e.offsetX;
    } else {
      this.yPosition = positionY;
      this.xPosition = e.offsetX;
    }
    this.input.nativeElement.focus();
  }
}
