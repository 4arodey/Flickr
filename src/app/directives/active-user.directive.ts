import { Directive, HostListener } from '@angular/core';
import { Subject } from 'rxjs';
import { CustomAny } from 'src/app/interfaces/generic';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Directive({
  selector: '[appActiveUser]'
})
export class ActiveUserDirective {
  public userActivity;
  public userInactive: Subject<CustomAny> = new Subject();
  private readonly timerValue = 300000;

  constructor(
    private authService: AuthService,
    private router: Router
    ) {
    this.userInactive.subscribe(() => this.signOut());
  }

  public setTimeout(): void {
    this.userActivity = setTimeout(() => {
      this.userInactive.next(undefined);
    }, this.timerValue);
  }

  public signOut(): Promise<boolean> {
    this.router.navigate(['login']);
    return this.authService.signOut();
  }

  @HostListener('window:mousemove') refreshUserState(): void {
    clearTimeout(this.userActivity);
    this.setTimeout();
  }

  @HostListener('window:mouseout') stopWatching(): void {
    clearTimeout(this.userActivity);
  }
}
