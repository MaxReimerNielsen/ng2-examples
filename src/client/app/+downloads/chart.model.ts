export class Chart {  
  id: String;
  data: {
    series: any[],
    type: string,
    plot: {
      tooltip: {
        text: string
      }
    },
    legend: {
      layout: string
    }
    'scale-x': {
      labels: any[]
    }
  };
  height: any;
  width: any;

  constructor (config: any) {
    this.id = config.id;
    this.data = config.data;
    this.height = config.height || 400;
    this.width = config.width || '100%';
  }
}