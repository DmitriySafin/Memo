import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from '../service/local-storage.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [LocalStorageService]
})
export class ShareModule { }
