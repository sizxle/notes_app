import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNoteComponent } from './add-note.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@NgModule({
  declarations: [ AddNoteComponent ],
  imports: [CommonModule,
            ReactiveFormsModule,
       ],
  exports: [ AddNoteComponent ]
})
export class AddNoteModule {}
