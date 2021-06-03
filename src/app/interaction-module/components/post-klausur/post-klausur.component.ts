import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders, HttpResponse } from '@angular/common/http';
import { KlausurenService } from '../../services/klausuren.service';
import {DropDownSelection} from '../../modules/drop-down-selection';

@Component({
  selector: 'app-post-klausur',
  templateUrl: './post-klausur.component.html',
  styleUrls: ['./post-klausur.component.css']
})
export class PostKlausurComponent implements OnInit {
  progress;
  files = undefined;
  btnKlausurDisable = true;
  newKlausur = false;
  yearList: string[] = [];
  inputSet = false;
  fileSet = false;
  dropDownSelection: DropDownSelection;
  disableYear = true;
  checkboxChecked = false;
  constructor(public klausurenService: KlausurenService) { }
  ngOnInit(): void {
    this.fillDropDownYear();
  }

  onFileInput(files: FileList): void {
    this.fileSet = true;
    if (this.inputSet){
      this.btnKlausurDisable = false;
    }
    this.files = files;
  }

  upload(): void{
    console.log(this.files);
    const response = this.klausurenService.uploadKlausur(this.files);
    response.subscribe(event => {
      console.log(event);
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
        console.log(this.progress);
      } else if (event instanceof HttpResponse) {
        alert('File Successfully Uploaded');
      }
    });
  }

  selectionChanged($event: string): void {
   if (this.fileSet){
     this.btnKlausurDisable = false;
   }
   this.inputSet = true;
  }

  setSelection($event: DropDownSelection): void {
    this.dropDownSelection = $event;
    this.disableYear = false;
  }

  private fillDropDownYear(): void{
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= 2010; i--){
      const nextYear = i + 1;
      this.yearList.push('WS' + i + '/' + nextYear);
      this.yearList.push('SS' + i);
    }
  }

  onClickNewKlausur(): void {
    this.newKlausur = !this.newKlausur;
    if(this.newKlausur){
      this.disableYear = false;
    }else {
      this.disableYear = true;
    }
  }
}
