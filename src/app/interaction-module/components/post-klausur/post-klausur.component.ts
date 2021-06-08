import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders, HttpResponse } from '@angular/common/http';
import { KlausurenService } from '../../services/klausuren.service';
import {DropDownSelection} from '../../modules/drop-down-selection';
import {ApiModule, KlausurenControllerService} from '../../../../../projects/klausuren-api/src';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-klausur',
  templateUrl: './post-klausur.component.html',
  styleUrls: ['./post-klausur.component.css']
})
export class PostKlausurComponent implements OnInit {
  progress;
  files: FileList;
  btnKlausurDisable = true;
  newKlausur = false;
  yearList: string[] = [];
  inputSet = false;
  fileSet = false;
  dropDownSelection: DropDownSelection;
  disableYear = true;
  checkboxChecked = false;
  year: string;
  uploadSuccessfull = false;
  uploadFailure = false;
  constructor(private klausrenAPI: KlausurenControllerService, private router: Router) { }
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
    this.klausrenAPI.addKlausurForm(this.dropDownSelection.semester, this.dropDownSelection.studiengang, this.year,
      this.dropDownSelection.modul, '', this.files[0], localStorage.getItem('klausuren-user')).subscribe(ele => {console.log(ele); }, error => {
        if (error?.status === 200){
          this.uploadSuccessfull = true;
        } else {
          this.uploadFailure = true;
        }
      }
    );
  }

  selectionChanged($event: string): void {
   if (this.fileSet){
     this.btnKlausurDisable = false;
   }
   this.inputSet = true;
   this.year = $event;
  }

  setSelection($event: DropDownSelection): void {
    console.log($event);
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
    console.log("click");
    this.newKlausur = ! this.newKlausur;
    if (this.newKlausur){
      this.disableYear = false;
    }else {
      this.disableYear = true;
    }
  }

  onClickSuccessMessage(): void {
    this.uploadSuccessfull = false;
    this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
      this.router.navigate(['post']);
    });
  }

  deleteFileArray(): void {
    console.log(this.files);
    this.files = undefined;
  }

  onClickFailureMessage(): void {
    this.uploadFailure = false;
    this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
      this.router.navigate(['post']);
    });
  }
}
