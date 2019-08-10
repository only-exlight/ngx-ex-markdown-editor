import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public form = new FormGroup({
    markdown: new FormControl(null)
  });

  get markdown(): FormControl {
    return this.form.get('markdown') as FormControl;
  }
}
