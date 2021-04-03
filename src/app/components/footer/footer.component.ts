import { Component } from '@angular/core';
import { CustomAny } from 'src/app/interfaces/generic';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public get currentYear(): CustomAny {
    return new Date().getFullYear();
  }
}
