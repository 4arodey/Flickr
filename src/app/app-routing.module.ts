import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { NotFoundComponent } from 'src/app/pages/not-found/not-found.component';
import { BookmarksComponent } from 'src/app/pages/bookmarks/bookmarks.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { UserLoginComponent } from 'src/app/pages/user-login/user-login.component';
import { DynamicFormComponent } from 'src/app/pages/dynamic-form/dynamic-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: UserLoginComponent,
  },
  {
    path: 'bookmarks',
    component: BookmarksComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'form',
    component: DynamicFormComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
