import { Component, Input } from '@angular/core';
import { Twitmodel } from '../twitmodel.model';
import { Twits } from './twitinter';

@Component({
  selector: 'app-twits',
  templateUrl: './twits.component.html',
  styleUrls: ['./twits.component.css']
})
export class TwitsComponent {


  @Input()
    twits:Twitmodel[]=[]
  

}
