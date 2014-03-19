//valores
var workersActives = 0;
var workersMaxNumber = 20;

var ctx;
var myDoughnut;
var interval;

function start() {
    startChart();

    setInterval(function () { drawChart() }, 5000);
}

function startChart() {

    workersActives++;
    var doughnutData = [
            {
                value: workersMaxNumber - workersActives,
                color: "#4D5360"
            },
            {
                value: workersActives,
                color: "#F7464A"
            },

    ];

    var options = {
        //Boolean - Whether we should show a stroke on each segment
        segmentShowStroke: true,

        //String - The colour of each segment stroke
        segmentStrokeColor: "#fff",

        //Number - The width of each segment stroke
        segmentStrokeWidth: 2,

        //The percentage of the chart that we cut out of the middle.
        percentageInnerCutout: 70,

        //Boolean - Whether we should animate the chart	
        animation: true,

        //Number - Amount of animation steps
        animationSteps: 180,

        //String - Animation easing effect
        animationEasing: "easeOutExpo",

        //Boolean - Whether we animate the rotation of the Doughnut
        animateRotate: true,

        //Boolean - Whether we animate scaling the Doughnut from the centre
        animateScale: false,

        //Function - Will fire on animation completion.
        onAnimationComplete: null
    }

    ctx = document.getElementById("donut").getContext("2d");
    myDoughnut = new Chart(ctx);
    myDoughnut.Doughnut(doughnutData, options);


}

function drawChart() {

    workersActives++;
    if (workersActives > 20) workersActives = 0;

    var doughnutData = [
            {
                value: workersMaxNumber - workersActives,
                color: "#4D5360"
            },
            {
                value: workersActives,
                color: "#F7464A"
            },

    ];

    var options = {
        percentageInnerCutout: 70,
        animation: false,
    }

    myDoughnut.Doughnut(doughnutData, options);


}

onload = start();