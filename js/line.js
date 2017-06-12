$(document).ready(function() {

	//get canvas
	var ctx = $("#line-chartcanvas");

	var data = {
		labels : ["Noida", "Delhi", "Pune", "Gurgaon", "Kota"],
		datasets : [
			{
				label : "BigData",
				data : [10, 50, 25, 70, 40],
				backgroundColor : "blue",
				borderColor : "lightblue",
				borderWidth: 1,
				fill : false,
				pointRadius : 5
			},
			{
				label : "Python",
				data : [20, 35, 40, 60, 50],
				backgroundColor : "green",
				borderColor : "lightgreen",
				borderWidth: 1,
				fill : false,
				pointRadius : 5
			},
			{
				label : "Java",
				data : [45, 35, 55, 65, 30],
				backgroundColor : "red",
				borderColor : "red",
				borderWidth: 1,
				fill : false,
				pointRadius : 5
			}
		]
	};

	var options = {
		legend : {
			display : true,
			position : "top",
			labels: {fontColor: 'white'}
		},
		scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    fontColor: 'White'
                },
            }],
          xAxes: [{
                ticks: {
                    fontColor: 'White'
                },
            }]
        }
	};

	var chart = new Chart( ctx, {
		type : "line",
		data : data,
		options : options
	});

});