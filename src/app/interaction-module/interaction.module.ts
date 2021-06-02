import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TabsComponent} from './components/tabs/tabs.component';
import {HeaderComponent} from './components/header/header.component';
import {ViewKlausurComponent} from './components/view-klausur/view-klausur.component';
import {PostKlausurComponent} from './components/post-klausur/post-klausur.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DropdownListComponent } from './components/dropdown-list/dropdown-list.component';
import { KlausurInputComponent } from './components/klausur-input/klausur-input.component';
import { KlausurDropdownSelectionComponent } from './components/klausur-dropdown-selection/klausur-dropdown-selection.component';
import { KlausurInputSelectionComponent } from './components/klausur-input-selection/klausur-input-selection.component';
import { PdfViewerComponent } from './components/pdf-viewer/pdf-viewer.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';



@NgModule({
  declarations: [
    TabsComponent,
    HeaderComponent,
    ViewKlausurComponent,
    PostKlausurComponent,
    DropdownListComponent,
    KlausurInputComponent,
    KlausurDropdownSelectionComponent,
    KlausurInputSelectionComponent,
    PdfViewerComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    NgxExtendedPdfViewerModule
  ], exports: [
    TabsComponent,
    HeaderComponent,
    ViewKlausurComponent,
    PostKlausurComponent
  ]
})
export class InteractionModule { }
