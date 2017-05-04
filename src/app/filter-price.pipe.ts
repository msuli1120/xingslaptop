import { Pipe, PipeTransform } from '@angular/core';
import { Pc } from 'app/pc.model';

@Pipe({
  name: 'filterPrice',
  pure: false
})
export class FilterPricePipe implements PipeTransform {

  transform(input: Pc[], desiredPrice){
    var output: Pc[] = [];
    if(desiredPrice === "expensive"){
      for(var i = 0; i < input.length; i++) {
        if(input[i].price >= 800){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredPrice === "cheap"){
      for(var i = 0; i < input.length; i++){
        if(input[i].price <= 700){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredPrice === "mid"){
      for(var i = 0; i < input.length; i++){
        if((input[i].price > 700) && (input[i].price < 800)){
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
