import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FileListComponent } from './file-list/file-list.component';
import { SearchTopComponent } from './search-top/search-top.component';
import { OrderComponent } from './util/order/order.component';
import { PirateBayService } from './common/pirate-bay.service';

@NgModule({
  declarations: [
    AppComponent,
    FileListComponent,
    SearchTopComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [PirateBayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
