import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders, HttpResponse } from '@angular/common/http';
import { KlausurenService } from '../../services/klausuren.service';

@Component({
  selector: 'app-post-klausur',
  templateUrl: './post-klausur.component.html',
  styleUrls: ['./post-klausur.component.css']
})
export class PostKlausurComponent implements OnInit {
  progress;
  files = undefined;
  btnKlausurDisable = true;
  studiengang: string;
  semester: string;
  modul: string;
  setStudiengang($event: string): void{
    this.studiengang = $event;
  }
  setSemester($event: string): void{
    this.semester = $event;
  }
  setModul($event: string): void{
    this.modul = $event;
  }
  constructor(public klausurenService: KlausurenService) { }
  ngOnInit(): void {
  }

  onFileInput(files: FileList): void {
    this.btnKlausurDisable = false;
    this.files = files;
    console.log(this.semester, this.studiengang, this.modul);
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

}
