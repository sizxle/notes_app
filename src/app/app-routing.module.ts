import {NgModule} from '@angular/core';
import {RouterModule, Routes,provideRouter} from '@angular/router';
import { NotesListComponent } from './features/notes/components/ui/notes-list/notes-list.component';
import { AddNoteComponent } from './features/notes/components/smart/add-note/add-note.component';

const routes: Routes = [
  { path: '', component: NotesListComponent },
  { path: 'new', component: AddNoteComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {
}
