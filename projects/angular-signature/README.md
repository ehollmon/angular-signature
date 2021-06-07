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
import {PadComponent } from '@ehollmon/angular-signature';
import {HttpClient} from "@angular/common/http";

export class AppComponent implements OnInit {
  @ViewChild('myPad')  myPad : PadComponent;

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

## Configuration Options

### Configure Pad Dimensions
```html
<sig-pad 
  [pad_height]="'300px'" 
  [pad_height]="'300px'" >
</sig-pad>
```

### Configure Pad Styles
```html
<sig-pad 
  [pad_background_color]="'rgba(254,254,254,.9)'"
  [pad_border_width]="'5px'"
  [pad_border_color]="'red'" >
</sig-pad>
```

### Configure Pen Style
```html
<sig-pad 
  [pen_size]="10"
  [pen_color]="'blue'" >
</sig-pad>
```

## Event Handling
```html
<sig-pad
  (signingStart)="userStartedSigning()"
  (signing)="userCurrentlySigning()"
  (signingEnd)="userStoppedSigning()" >
</sig-pad>
```

```ts
import {PadComponent} from '@ehollmon/angular-signature';

export class AppComponent implements OnInit {
  @ViewChild('myPad')  myPad : PadComponent;
    
  ...
  
  userStartedSigning(){
   // Your logic here
  }

  userCurrentlySigning(){
    // Your logic here
  }

  userStoppedSigning(){
    // Your logic here
  }
  
}
```


## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section.

## Author
[@ehollmon](https://github.com/ehollmon)
