import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  public static LANGUAGE : String = navigator.language.split("-").pop();
  public static MYLG : any  = localStorage.getItem('mrodriguezlg');

  constructor(
    private http: HttpClient
  ) {

    if(GeneralService.MYLG == null){
      if(GeneralService.LANGUAGE == "ES" || GeneralService.LANGUAGE == "EN" || GeneralService.LANGUAGE == "DE"){
        GeneralService.LANGUAGE = GeneralService.LANGUAGE;
      }else{
        GeneralService.LANGUAGE = "EN";
      }
    }else{
      GeneralService.LANGUAGE = GeneralService.MYLG;
    }
    
  }

  public jsonurl = 'assets/text/';
  
  getContentJSON(content) {
    return this.http.get(this.jsonurl + content);
  }

}
