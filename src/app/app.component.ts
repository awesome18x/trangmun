import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'trangmun';
  isShowResult = false;
  fileToUpload: File | null = null;

  uploadFile() {
    this.isShowResult = true;
  }

  uploadFiles(event: Event){
    if(event) {
      setTimeout(() => {
        this.isShowResult = true;
      }, 300);
    }
  } 
}
