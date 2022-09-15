import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '@core/core.state';
import {getCurrentAuthUser} from '@core/auth/auth.selectors';
import {map, catchError} from 'rxjs/operators';
import {of} from 'rxjs';
import {UserService} from '@core/http/user.service';
import {TrendzLicenseModalComponent} from '@home/components/trendz/trendz-license-modal.component';
import {MatDialog} from '@angular/material/dialog';


@Injectable({
  providedIn: 'root'
})
export class OpenTrendzGuard implements CanActivate {

  constructor(private store: Store<AppState>,
              private userService: UserService,
              private router: Router,
              public dialog: MatDialog
              ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const userId = getCurrentAuthUser(this.store).userId;

    return this.userService.getUser(userId).pipe(map((user) => {
        // TODO add real checking
        if (user) {
          this.openLicenseModal();
        } else {
          //this.router.navigate(['/', 'trendz']);
          // TODO change "window.open" to comment line late
          window.open(
            'https://trendz-cloud.thingsboard.io/trendz',
            '_blank'
          );
          return true;
        }
      }),
      catchError((err) => {
        return of(false);
      })
    );
  }

  openLicenseModal(): void {
    const dialogRef = this.dialog.open(TrendzLicenseModalComponent, {width: '430px', maxWidth: '80vw', disableClose: true
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.router.navigate(['/', 'billing']);
      }
    });
  }
}
