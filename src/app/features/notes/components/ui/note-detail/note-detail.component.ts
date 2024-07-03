import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Note, NOTES } from '../../../models/notes';
@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrl: './note-detail.component.scss'
})
export class NoteDetailComponent implements OnInit{

  note?:Note;

  constructor(private router: Router,private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    let id =Number(this.activeRoute.snapshot.paramMap.get('id'));
    this.note= NOTES.find(note => note.id === id);
  }

}
