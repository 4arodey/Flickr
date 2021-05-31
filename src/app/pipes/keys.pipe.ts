import { Pipe, PipeTransform } from '@angular/core';
import { CustomAny } from '../interfaces/generic';

@Pipe({
  name: 'keys',
})
export class KeysPipe implements PipeTransform {
  public transform(value: CustomAny): string[] {
    return Object.keys(value || {});
  }
}
