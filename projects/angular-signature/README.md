# @ehollmon/angular-signature

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.3.

## Installation

```bash
# installation with npm
npm install @ehollmon/angular-signature

# installation with yarn
yarn add @ehollmon/angular-signature
```

## Usage
```html
<sig-pad #mySignaturePad [pad_height]="1000"></sig-pad>
```

```ts
import {PadComponent as SigPadComponent} from 'angular-signature';
import {HttpClient} from "@angular/common/http";

export class AppComponent implements OnInit {
  @ViewChild('myPad')  myPad : SigPadComponent;

  constructor(
    private http : HttpClient
  ) {}

  /**
   * Example 1: Copy the canvas to an image and append to the current document
   */
  appendSignatureImageToHTMLBody(){
    /**
     * Convert the current state of the canvas to image
     */
    let img_data = this.myPad.getImageData();
    var image = new Image();
    var div_container = document.createElement('div')
    
    // Set the image src to the image data
    image.src = img_data;
    
    // add the image to a div container
    div_container.appendChild(image)

    // display the image by appending the div container the the html body
    document.body.append(div_container)

  }

  /**
   * Example 2: Send base64 image data to server
   */
  sendSignatureImageServer(){
    /**
     * Get Image data
     */
    let img_data = this.myPad.getImageData();
    let url = 'https://<your-endpoint>';
    
    let params = {
      imgBase64: img_data
    };
    
    // Send Data to server
    this.http.post(url, params).subscribe( response => {
     // ...
    });

  }


}
```

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section.

## Author
[@ehollmon](https://github.com/ehollmon)
