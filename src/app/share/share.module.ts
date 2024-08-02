import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from '../service/local-storage.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from '../components/contact/contact.component';


@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [LocalStorageService]
})
export class ShareModule { }
