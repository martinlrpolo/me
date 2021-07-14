import { Component } from '@angular/core';
import { GeneralService } from 'src/services/general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'me';

  constructor() {

  }

  language(lg){
    GeneralService.LANGUAGE = lg;
    localStorage.setItem('mrodriguezlg', lg);
    window.location.href = "";
  }

}
