import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/services/general.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor(
    private generalService : GeneralService
  ) { }

  public text : any = null;
  public lg : any = GeneralService.LANGUAGE;

  ngOnInit() {
    this.getText("resume.json");
  }
  
  getText(content){
    this.generalService.getContentJSON(content).subscribe(data => {
      this.text = data;
    });
  }

  counter(n: number): any[] {
    return Array(n);
  }

}
