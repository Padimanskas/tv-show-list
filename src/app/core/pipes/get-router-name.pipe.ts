import { Pipe, PipeTransform } from '@angular/core';
import { map } from 'rxjs/internal/operators';

@Pipe({
  name: 'getRouterName'
})
export class GetRouterNamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.pipe(
      map(this.getLastSegment),
      map(this.humanize),
      map(this.capitalize)
    );
  }

  capitalize(str: string): string {
    return `${str.charAt(0).toUpperCase()}${str.slice(1).toLowerCase()}`;
  }

  humanize(str: string): string {
    return str.split('-').join(' ');
  }

  getLastSegment(routePath: string): string {
    return routePath.split('/').pop();
  }

}
