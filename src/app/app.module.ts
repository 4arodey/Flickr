import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './components/card/card.component';
import { CardPreviewComponent } from './components/card-preview/card-preview.component';
import { LayoutItemComponent } from './components/layout-item/layout-item.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { MenuComponent } from './components/menu/menu.component';
import { BookmarksComponent } from './pages/bookmarks/bookmarks.component';
import { TagsComponent } from './components/tags/tags.component';
import { MatChipsModule } from '@angular/material/chips';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { LoginComponent} from './components/login/login.component';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActiveUserDirective } from './directives/active-user.directive';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { PreviewImageComponent } from './components/preview-image/preview-image.component';
import { FormComponent } from './components/form/form.component';
import { DynamicFormComponent } from './pages/dynamic-form/dynamic-form.component';
import { DynamicTableComponent } from './pages/dynamic-table/dynamic-table.component';
import { TableComponent } from './components/table/table.component';
import { RadioButtonComponent } from './components/formcontrols/radio-button/radio-button.component';
import { CheckboxComponent } from './components/formcontrols/checkbox/checkbox.component';
import { TextComponent } from './components/formcontrols/text/text.component';
import { CheckboxGroupComponent } from './components/formcontrols/checkbox-group/checkbox-group.component';
import { RadioButtonGroupComponent } from './components/formcontrols/radio-button-group/radio-button-group.component';
import { DatepickerComponent } from './components/formcontrols/datepicker/datepicker.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    HomeComponent,
    SearchComponent,
    CardComponent,
    CardPreviewComponent,
    LayoutItemComponent,
    PaginationComponent,
    MenuComponent,
    BookmarksComponent,
    TagsComponent,
    LoginComponent,
    ActiveUserDirective,
    UserLoginComponent,
    PreviewImageComponent,
    FormComponent,
    DynamicFormComponent,
    DynamicTableComponent,
    TableComponent,
    RadioButtonComponent,
    CheckboxComponent,
    TextComponent,
    CheckboxGroupComponent,
    RadioButtonGroupComponent,
    DatepickerComponent,
  ],
  entryComponents: [LoginComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatChipsModule,
    ReactiveFormsModule,
    MatRippleModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatDatepickerModule,
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
