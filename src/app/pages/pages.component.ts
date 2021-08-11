import { Component, OnInit } from '@angular/core';
import { SettingService } from '../services/setting.service';

// @ts-ignore
declare function customInitFunctions();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit { 

  constructor( private settingService: SettingService ) { }

  ngOnInit(): void {
    customInitFunctions();
  }

  

}
