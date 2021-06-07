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

  ngOnInit(): void { }

  ngOnChanges(){}

  clearPad(){
    this.myPad.clearPad();
  }

  test(){
    let img_data = this.myPad.getImageData();
    var div_container = document.createElement('div')

    var image = new Image();
    image.src = img_data;
    div_container.appendChild(image)

    document.body.append(div_container)
  }

  signingStarted() {
    console.log("signing started")
  }

  signingEnded() {
    console.log("signing ended")
  }
}
