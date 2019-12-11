import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable()
export class ResponseHandlingHelper {

  private goToShowPage(): void {
    this.router.navigateByUrl('/show');
  }

  private goToErrorPage(statusCode: number): void {
    this.router.navigate([ '/error-page', { status: statusCode } ]);
  }

  public switchToErrorPage(status: number): void {
    return ( status === 401 || status === 0 ) ? this.goToShowPage() : this.goToErrorPage(status);
  }

  constructor(private router: Router) {}
}


