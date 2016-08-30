import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DownloadsComponent,
  DownloadService,
  ZingChart
} from './index';


@NgModule({
    imports: [CommonModule],
    declarations: [DownloadsComponent, ZingChart],
    exports: [DownloadsComponent],
    providers: [DownloadService],
})

export class DownloadsModule { }