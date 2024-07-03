import {NgModule} from '@angular/core';
import {RouterModule, Routes,provideRouter} from '@angular/router';
import { NotesListComponent } from './features/notes/components/ui/notes-list/notes-list.component';
import { AddNoteComponent } from './features/notes/components/smart/add-note/add-note.component';
import { NoteDetailComponent } from './features/notes/components/ui/note-detail/note-detail.component';

const routes: Routes = [
  { path: '', component: NotesListComponent },
  { path: 'new', component: AddNoteComponent },
  { path: 'note/:id', component: NoteDetailComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {
}
