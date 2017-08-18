import { NoteService } from './../../app/note.service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  notes;

  constructor(public navCtrl: NavController, private noteService: NoteService) {
    this.notes = this.noteService.notes;
  }

  onItemClick(note){
    console.log("item-click", note);
    this.navCtrl.push('DetailPage', {
      noteParam: note
    });
  }

  onAddClick(){
    this.navCtrl.push('DetailPage');
  }

}
