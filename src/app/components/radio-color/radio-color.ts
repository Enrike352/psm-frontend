import { Component } from '@angular/core';
import { NzColorPickerModule } from 'ng-zorro-antd/color-picker';
import { FormsModule } from "@angular/forms";
import { NzFlexModule } from 'ng-zorro-antd/flex';

@Component({
  selector: 'app-radio-color',
  imports: [NzColorPickerModule, FormsModule, NzFlexModule],
  templateUrl: './radio-color.html',
  styleUrl: './radio-color.scss',
})
export class RadioColorComponent {
  color1: string = "#000000";
  color2: string = "#000000";
  color3: string = "#000000";
  color4: string = "#000000";

  diferenteColor(entradainput: any) {
    console.log("diferenteColor() color2 es = ", this.color2);
  }

  cambiarColor(inputs: any) {
    this.color3 = "#007EAB";
    console.log("cambiarColor() color3  = ", this.color3);
  }

  diferenteColor4(entradainput: any) {
    if (entradainput && entradainput.color) {
      this.color4 = entradainput.color.toHexString();
    } else {
      this.color4 = entradainput;
    }
    console.log("diferenteColor4() color4 es = ", this.color4);
  }

}
