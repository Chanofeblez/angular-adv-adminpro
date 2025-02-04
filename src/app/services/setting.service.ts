import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  public linkTheme = document.querySelector('#theme');

  constructor() {     

    const urlaux = localStorage.getItem('theme') || './assets/css/colors/purple-dark.css';   
    this.linkTheme?.setAttribute( 'href', urlaux );

  }

  changeTheme( color: string) {
    
    const url = `./assets/css/colors/${ color }.css`;

    this.linkTheme?.setAttribute( 'href', url );
    localStorage.setItem( 'theme', url );
    this.checkCurrentTheme();

  }

  checkCurrentTheme() {        


    const linkAux = document.querySelectorAll( '.selector' );
    linkAux.forEach( (elem: any) => {
      
      elem.classList.remove('working');      
      const btnTheme = elem.getAttribute( 'data-theme');      
      const btnThemeUrl = `./assets/css/colors/${ btnTheme }.css`;      
      const currentTheme = this.linkTheme?.getAttribute( 'href' );      

      if ( btnThemeUrl === currentTheme ){
        
        elem.classList.add( 'working' );
      }
    });
  }

}
