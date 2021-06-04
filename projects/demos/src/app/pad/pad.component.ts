import {Component, OnInit, ViewChild} from '@angular/core';
import {PadComponent as SigPadComponent} from 'angular-signature';
@Component({
  selector: 'app-pad',
  templateUrl: './pad.component.html',
  styleUrls: ['./pad.component.scss']
})
export class PadComponent implements OnInit {
  @ViewChild('myPad')  myPad!: SigPadComponent;

  constructor() { }

  ngOnInit(): void {
  }


  test(){
    var img_data = this.myPad.getCanvasImage();

    var image = new Image();
    image.src = img_data;

    var image_div = document.createElement('div')
    image_div.appendChild(image)

    document.body.append(image_div)

  }


}
