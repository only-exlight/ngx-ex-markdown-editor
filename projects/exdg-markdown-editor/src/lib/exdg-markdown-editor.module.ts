import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownEditorComponent } from './components/editor/ngx-lib-markdown-editor.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OptionButtonsComponent } from './components/option-btns/option-btns.component';
import { EditorService } from './services/editor.service';
import { StatusBarComponent } from './components/status-bar/status-bar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { EditorAreaComponent } from './components/editor-area/editor-area.component';

@NgModule({
  declarations: [
    MarkdownEditorComponent,
    OptionButtonsComponent,
    StatusBarComponent,
    ToolbarComponent,
    EditorAreaComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    EditorService
  ],
  exports: [MarkdownEditorComponent]
})
export class MarkdownEditorModule { }
