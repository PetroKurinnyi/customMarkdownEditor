import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarkdownEditorComponent } from './md-editor/md-editor.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, MarkdownEditorComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
