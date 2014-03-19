var homeRender;
var tileWidthPercentage = .18;
var tileMargin = 5;
var tileLabels = [
    {
        label:"productsWaiting",
        humanLabel:"Produtos Em Espera"
    },
    {
        label:"productsReady",
        humanLabel:"Produtos Prontos"
    },
    {
        label:"stockUpdates",
        humanLabel:"Atualização de Estoque/Preço"
    },
    {
        label:"ordersWaiting",
        humanLabel:"Peditos Em Espera"
    },
    {
        label:"ordersReady",
        humanLabel:"Peditos Prontos"
    }];


function start() {
    //renderCharts();
    renderTiles();
}

function renderCharts() {

    var stage = $("#MainStage");

    homeRender = new HomeRender();
    homeRender.render(stage);
}

function centerTileContainer(){
    var width = $(document).width();
    var height= ($(document).width() * tileWidthPercentage) + 2*tileMargin;
    var top =($(document).height() - height)/2;

    $("#gridContainer").css("display", "block");
    $("#gridContainer").css("width", $(document).width()+"px");
    $("#gridContainer").css("height", (tileSize + 2*tileMargin)+"px");
    $("#gridContainer").css("position", "relative");
    $("#gridContainer").css("top", top + "px");
}

function renderTiles() {
    var tileSize = $(document).width() * tileWidthPercentage;
    var gridlist = document.createElement("ul");
    

    $("#gridContainer div.gridster").append(gridlist);
    
    var gridster;

    gridster = $("#MainStage .gridster ul").gridster({
        widget_margins: [tileMargin, tileMargin],
        widget_base_dimensions: [tileSize, tileSize],
        
        min_cols: tileLabels.length,
        max_cols: tileLabels.length,
        min_rows:1,


    }).data('gridster');//.disable();

    var widgets = generateTiles(tileSize);
    
    $.each(widgets, function (i, widget) {
        gridster.add_widget.apply(gridster, widget)
    });
}

function generateTiles(tileSize){
    var itemList = new Array();

    for (var i = 0; i < tileLabels.length; i++) {

        var baseId = tileLabels[i].label + "Item";

        var listitem = document.createElement("li");

        var render = new HomeRender();
        var options  = {
            Id: baseId,
            Width: tileSize,
            Height: tileSize,
            Background: "#FFF",
            Label: {
                Id: baseId+"_Label",
                FontFamily: "Segoe UI Light",
                Color: "#F74800",
                Background: "#E4E1DF",
                FontSize: "1.8em",
                Text: tileLabels[i].humanLabel,
            },
            InfoCard: {
                Id: baseId+"_InfoCard",
                FontFamily: "Segoe UI Symbol",
                Color: "#00274C",
                Background: "#E4E1DF",
                FontSize: "5.2em",
                Text: 99999,
                Bold: false,
            },
            
        };

        $(listitem).append(render.buildTile(options));

        itemList[i] = [listitem, 1, 1];
    };

    return itemList;
}

onload = start();