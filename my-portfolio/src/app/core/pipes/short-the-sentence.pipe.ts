import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortTheSentence',
})
export class ShortTheSentencePipe implements PipeTransform {
  transform(value: string, numOfCharacters: number): string {
    return value.length > numOfCharacters
      ? value.trim().slice(0, numOfCharacters) + '...'
      : value;
  }
}
