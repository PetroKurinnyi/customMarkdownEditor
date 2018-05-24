import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarkdownEditorComponent } from './md-editor/md-editor.component';

@NgModule({
  declarations: [AppComponent, MarkdownEditorComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
