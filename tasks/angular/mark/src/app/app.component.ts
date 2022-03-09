import { Component } from '@angular/core';
import { Note } from './note.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mark';
  noteList:Note[] = []
addNote(noteData:any):void{
  console.log(noteData)
  this.noteList.push(new Note(noteData.date, noteData.text, noteData.name))

}
}
