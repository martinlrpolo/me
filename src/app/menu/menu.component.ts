import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/services/general.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    private generalService : GeneralService
  ) { }

  public text : any = null;
  public lg : any = GeneralService.LANGUAGE;

  ngOnInit() {
    this.getText("menu.json");
  }
  
  getText(content){
    this.generalService.getContentJSON(content).subscribe(data => {
      this.text = data;
    });
  }


}
