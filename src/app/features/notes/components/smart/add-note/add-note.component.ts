import { Component ,inject} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NOTES } from '../../../models/notes'
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.scss'
})
export class AddNoteComponent {

  router =inject(Router);

  addNoteForm = new FormGroup({
    title:new FormControl('',Validators.required),
    text:new FormControl('')
  });


   addNote(){
     let title= this.addNoteForm.value.title??'';
     let text=this.addNoteForm.value.text??'';

     if(this.addNoteForm.valid){
      let currentId= NOTES.length;

      let newNote={
        id:currentId+1,
        title:title,
        text:text,
      };

      NOTES.unshift(newNote);
      this.addNoteForm.reset();
      this.router.navigateByUrl('');
     }
   }
}
