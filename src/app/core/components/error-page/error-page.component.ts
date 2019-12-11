import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";

@Component({
  selector: 'error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent {

  public errorStatus$ = this.route.paramMap.pipe(
    map(params => params.get('status'))
  );

  constructor(private route: ActivatedRoute) { }

}
