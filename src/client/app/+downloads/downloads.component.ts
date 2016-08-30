import { Component } from '@angular/core';
import { Chart } from './chart.model';
import { DownloadService, NpmModules } from './download.service';

@Component({
  moduleId: module.id,
  selector: 'downloads',
  templateUrl: 'downloads.component.html'
})

export class DownloadsComponent {
  charts: Chart[];

  constructor(private _service: DownloadService) {}

  ngOnInit() {
    this.setCharts();
  }

  setCharts() {
    this._service.getData()
      .then((data) => {
        this.charts = [
          {
            id: 'chart-1',
            data: {
              type: 'line',
              plot: {
                tooltip: {
                  text: '%t: %vt'
                }
              },
              legend: {
                layout: `1x${NpmModules.length}`
              },
              'scale-x': {
                labels: this.getLabels(data),
              },
              series: this.getSeries(data)
            }
          }
        ];
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  getLabels(data) {
    const keys = Object.keys(data);
    const labels = data[keys[0]].downloads.map(download => download.day);

    return labels; 
  }

  getValues(data) {
    const values = data.map((download: any, index: number) => {
      return download.downloads;
    });
    
    return values; 
  }

  getSeries(data) {
    const series = [];

    for(let key in data){
      const library = data[key];

      series.push({
        text: library.package,
        values: this.getValues(library.downloads); 
      });
    }

    return this.sortSeries(series);
  }

  sortSeries(series) {
    return series.sort((a,b) => {
      var nameA = a.text.toUpperCase();
      var nameB = b.text.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });
  }
}
