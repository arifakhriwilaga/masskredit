import { Component } 	from '@angular/core';

declare var jQuery : any;
@Component({
	//moduleId: module.id,
	selector: 'content',
	templateUrl: 'content.component.html'
})

export class ContentComponent { 

	ngOnInit(){
	// Datepicker
	jQuery('.datepicker').datepicker({
      format: 'mm/dd/yyyy',
      startDate: '-3d'
    });

	// Chart
	var perShapeGradient = {
        x1: 0,
        y1: 0,
        x2: 1,
        y2: 0
    };

    jQuery('#sales-chart').highcharts({
        chart: {
            type: 'area'
        },
        colors: [{
            linearGradient: perShapeGradient,
            stops: [
                [0, 'rgb(181, 220, 240)'],
                [1, 'rgb(218, 235, 253)']                
                ]
            }, {
            linearGradient: perShapeGradient,
            stops: [
                [0, 'rgb(116, 180, 106)'],
                [1, 'rgb(204, 242, 137)']
                ]
            }],
        title: {
            text: ''
        },
        credits: {
            enabled: false
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
        },
        yAxis: {
            title: {
                text: ''
            }
        },
        legend: {
            verticalAlign: 'top',
            align:'left',
            y:0,
            x:25
        },
        tooltip: {
            pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
        },
        plotOptions: {
            area: {
                // pointStart: 1940,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
            name: 'Average Loan<br/><span class="nominal av-loan">Rp. 4.000.000</span>',
            data: [6, 11, 32, 110, 50]
        }, {
            name: 'Average Investment<br/><span class="nominal av-invest">Rp. 4.000.000</span>',
            data: [5, 9, 20, 50, 20]
        }]
    });
	}

}