import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderModule } from './core/layout/component/header/header.module';
import { NotesListModule } from './features/notes/components/ui/notes-list/notes-list.module';
import { RouterModule } from '@angular/router';
import { AddNoteModule } from './features/notes/components/smart/add-note/add-note.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
  BrowserModule,
  HeaderModule,
  NotesListModule,
  RouterModule,
  AddNoteModule,
  AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
