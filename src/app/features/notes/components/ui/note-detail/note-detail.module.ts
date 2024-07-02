import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteDetailComponent } from './add-note.component';

@NgModule({
  declarations: [ NoteDetailComponent ],
  imports: [CommonModule,],
  exports: [ NoteDetailComponent ]
})
export class NoteDetailModule {}
