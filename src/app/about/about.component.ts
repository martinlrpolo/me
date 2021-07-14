import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/services/general.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private generalService : GeneralService
  ) { }

  public text : any = null;
  public lg : any = GeneralService.LANGUAGE;

  ngOnInit() {
    this.getText("home.json");
  }
  
  getText(content){
    this.generalService.getContentJSON(content).subscribe(data => {
      this.text = data;
    });
  }

}
