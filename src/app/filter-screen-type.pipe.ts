import { Pipe, PipeTransform } from '@angular/core';
import { Pc } from 'app/pc.model';

@Pipe({
  name: 'filterScreenType',
  pure: false
})
export class FilterScreenTypePipe implements PipeTransform {

  transform(input: Pc[], desiredScreenType) {
    var output: Pc[] = [];
    if(desiredScreenType === 'touch') {
      for(var i = 0; i < input.length; i++) {
        if(input[i].screenType === desiredScreenType){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredScreenType === "nonTouch") {
      for(var i = 0; i < input.length; i ++) {
        if(input[i].screenType === "non-touch"){
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
