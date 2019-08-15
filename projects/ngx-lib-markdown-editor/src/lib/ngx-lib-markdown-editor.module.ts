import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxLibMarkdownEditorComponent } from './components/editor/ngx-lib-markdown-editor.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { OptionButtonsComponent } from './components/option-btns/option-btns.component';

@NgModule({
  declarations: [
    NgxLibMarkdownEditorComponent,
    OptionButtonsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  exports: [NgxLibMarkdownEditorComponent]
})
export class NgxLibMarkdownEditorModule { }
