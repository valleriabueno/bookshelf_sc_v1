import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipes'
})
export class PipesPipepe implements PipeTransform {

  transform(value: string): string {

    switch(value){
      case '0': return 'newspaper';
      case '1': return 'psychology';
      case '2': return 'church';
      case '3': return 'forum';
      case '4': return 'history_edu';
      case '5': return 'functions';
      case '6': return 'architecture';
      case '7': return 'brush';
      case '8': return 'menu_book';
      case '9': return 'school';
    }
    return 'biotech';
  }
}
