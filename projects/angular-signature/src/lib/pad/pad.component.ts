import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'sig-pad',
  templateUrl: './pad.component.html',
  styleUrls: ['./pad.component.css']
})
export class PadComponent implements OnInit {
  canvas : any;
  ctx :  any;
  painting : boolean = false;

  @Input('pad_background_color') pad_background_color : string = "white";
  @Input('pad_border_color') pad_border_color : string = "white";
  @Input('pad_border_width') pad_border_width : string = "1px;";
  @Input('pad_height') pad_height : string = "300px";
  @Input('pad_width') pad_width : string = "900px";

  @Input('pen_size') pen_size : number = 2;
  @Input('pen_color') pen_color : string = 'black';


  @Output() signingStart = new EventEmitter<any>();
  @Output() signing = new EventEmitter<any>();
  @Output() signingEnd = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {
    this.canvas = document.getElementById('myCanvas')
    this.ctx = this.canvas.getContext('2d');
    this.ctx.strokeStyle = this.pen_color;
  }

  ngOnChanges(){ }

  public getImageData(){
    return this.canvas.toDataURL();
  }

  public clearPad(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  public setPenSize(penSize : number){
    this.pen_size = penSize;
    this.ctx.lineWidth = this.pen_size;
  }

  public getPenSize() : number{
   return this.pen_size
  }

  public setPenColor(penColor : string){
    this.pen_color = penColor;
    this.ctx.strokeStyle = penColor;
  }

  public getPenColor() : string {
    return this.pen_color;
  }

  public setPadBackgroundColor(backgroundColor : string){
    this.pad_background_color = backgroundColor;
  }

  public getPadBackgroundColor() : string {
      return this.pad_background_color;
  }

  public setPadBorderColor(borderColor : string ){
    this.pad_border_color = borderColor;
  }

  public getPadBorderColor() : string {
    return this.pad_border_color;
  }

  public setPadBorderWidth(borderWidth : string){
    this.pad_border_width = borderWidth;
  }

  public getPadBorderWidth() : string {
    return this.pad_border_width;
  }

  public startPainting(e : UIEvent){
    this.signingStart.emit(null);
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
    this.signing.emit(pos);


    if(this.pen_size){
      this.ctx.lineWidth = this.pen_size;
    }
    this.ctx.lineCap = "round";

    this.ctx.lineTo(pos.x, pos.y);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.moveTo(pos.x, pos.y);
  }

  public endPainting(){
    this.signingEnd.emit(null);
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
}
