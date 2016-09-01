import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DownloadsComponent,
  DownloadService,
  NvD3Chart,
  ZingChart
} from './index';


@NgModule({
    imports: [CommonModule],
    declarations: [DownloadsComponent, NvD3Chart, ZingChart],
    exports: [DownloadsComponent],
    providers: [DownloadService],
})

export class DownloadsModule { }