import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {environment} from '../../../../environments/environment';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent implements OnInit {
  source = environment.klausurenService + '/klausur/anzeigen/';
  constructor(private route: ActivatedRoute, private platform: Platform) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.source = this.source + params?.id;
    });
    if(this.platform.is('ios')){
      document.getElementById('wrapper').style.paddingTop = '95px';
    }
  }

}
