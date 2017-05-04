import { Pipe, PipeTransform } from '@angular/core';
import { Pc } from 'app/pc.model';

@Pipe({
  name: 'filterProcessor',
  pure: false
})
export class FilterProcessorPipe implements PipeTransform {

  transform(input: Pc[], desiredProcessor) {
    var output: Pc[] = [];
    if(desiredProcessor === "i7-7500"){

      for(var i = 0; i < input.length; i++) {
        if(input[i].processor === desiredProcessor){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredProcessor === "i7-6500") {
      for (var i = 0; i < input.length; i++) {
        if(input[i].processor === desiredProcessor) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredProcessor === "other") {
      for (var i = 0; i < input.length; i ++) {
        if((input[i].processor !== "i7-7500")&&(input[i].processor !== "i7-6500")) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }

  }

}
