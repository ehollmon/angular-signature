import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'sig-pad',
  templateUrl: './pad.component.html',
  styleUrls: ['./pad.component.css']
})
export class PadComponent implements OnInit {
  // @ViewChild(HTMLCanvasElement)
  canvas : any;
  ctx :  any;
  painting : boolean = false;

  @Input('pad_height') pad_height : number = 142;
  pad_width : number = 900;
  line_width : number = 10;

  constructor() { }

  public getImageData(){
    return this.canvas.toDataURL();
  }

  ngOnInit() {
    this.canvas = document.getElementById('myCanvas')
    this.ctx = this.canvas.getContext('2d');

  }

  public startPainting(e : UIEvent){
    this.painting = true;
    this.draw(e)
  }

  draw(e : UIEvent){
    if(!this.painting) return;

    var pos;

    if(e instanceof MouseEvent){
      pos = this.getMousePosition(e);
    } else if (e instanceof TouchEvent){
      pos = this.getTouchPosition(e);
    } else {
      console.log("invalid event")
      return
    }

    if(this.line_width){
      this.ctx.lineWidth = this.line_width;
    }
    this.ctx.lineCap = "round";

    this.ctx.lineTo(pos.x, pos.y);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.moveTo(pos.x, pos.y);
  }

  public endPainting(){
    this.painting = false;
    this.ctx.beginPath();
  }

  private getMousePosition(e : MouseEvent) {
    var rect = this.canvas.getBoundingClientRect();
    return {
      x: (e.clientX - rect.left) / (rect.right - rect.left) * this.canvas.width,
      y: (e.clientY - rect.top) / (rect.bottom - rect.top) * this.canvas.height
    };
  }

  private getTouchPosition(e : TouchEvent) {
    var rect = this.canvas.getBoundingClientRect();
    return {
      x: (e.touches[0].clientX - rect.left) / (rect.right - rect.left) * this.canvas.width,
      y: (e.touches[0].clientY - rect.top) / (rect.bottom - rect.top) * this.canvas.height
    };
  }

  public clearPad(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
