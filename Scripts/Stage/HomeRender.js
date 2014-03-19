function HomeRender() {
}

HomeRender.prototype.InfoCardNames = ["Workers", "Prontos", "Sucesso", "Erro"];

HomeRender.prototype.stageUnitDefaults = {
    Id: "",
    Width: "250px",
    Height: "250px",
    Background: "#FFF",
    Label: {
        Id: "",
        FontFamily: "Verdana",
        Color: "#000",
        Background: "#FFF",
        FontSize: "1em",
        Text: "Label",
    },
    InfoCard: {
        Id: "",
        FontFamily: "Verdana",
        Color: "#000",
        Background: "#FFF",
        FontSize: "1em",
        Text: "Info",
        Bold: true,
    },
    
};

HomeRender.prototype.defaultOptions = {
    Id: "",
    Width: 250,
    Height: 250,
    Background: "#FFF",
    Label: {
        Id: "",
        FontFamily: "Verdana",
        Color: "#000",
        Background: "#FFF",
        FontSize: "1em",
        Text: "Label",
    },
    InfoCard: {
        Id: "",
        FontFamily: "Verdana",
        Color: "#000",
        Background: "#FFF",
        FontSize: "1em",
        Text: "Info",
        Bold: true,
    },
    
};

HomeRender.prototype.interval;
HomeRender.prototype.data;

HomeRender.prototype.buildStageUnit = function (options) {
    var stageUnit = document.createElement("div");
    var stageUnitLabel = document.createElement("div");
    var stageUnitCard = document.createElement("div");

    //Controe Container - StageUnit
    $(stageUnit).attr("id", options.Id);
    $(stageUnit).attr("class", "StageUnit");
    $(stageUnit).css("width", options.Width);
    $(stageUnit).css("height", options.Height);
    $(stageUnit).css("margin", "10px");
    $(stageUnit).css("background", options.Background);

    //Constroe Label - Dinâmico
    $(stageUnitLabel).attr("id", options.Label.Id);
    $(stageUnitLabel).css("font-family", options.Label.FontFamily);
    $(stageUnitLabel).css("color", options.Label.Color);
    $(stageUnitLabel).css("background", options.Label.Background);
    $(stageUnitLabel).css("font-size", options.Label.FontSize);
    $(stageUnitLabel).append(options.Label.Text);
    //Constroe Label - Estático
    $(stageUnitLabel).css("width", "100%");
    $(stageUnitLabel).css("height", "20%");
    $(stageUnitLabel).css("display", "block");
    $(stageUnitLabel).css("float", "none");
    $(stageUnitLabel).css("text-align", "center");
    $(stageUnitLabel).css("overflow", "hidden");

    //Constroe InfoCard - Dinâmico
    $(stageUnitCard).attr("id", options.InfoCard.Id);
    $(stageUnitCard).css("font-family", options.InfoCard.FontFamily);
    $(stageUnitCard).css("color", options.InfoCard.Color);
    $(stageUnitCard).css("background", options.InfoCard.Background);
    $(stageUnitCard).css("font-size", options.InfoCard.FontSize);

    if (options.InfoCard.Bold) {
        $(stageUnitCard).css("font-weight", "bold");
    }
    //Constroe InfoCard - Estático
    $(stageUnitCard).css("width", "100%");
    $(stageUnitCard).css("height", "78%");
    $(stageUnitCard).css("display", "block");
    $(stageUnitCard).css("float", "none");
    $(stageUnitCard).css("float", "none");
    $(stageUnitCard).css("text-align", "center");
    $(stageUnitCard).css("overflow", "hidden");
    $(stageUnitCard).append(options.InfoCard.Text);

    //Junto objetos
    $(stageUnit).append(stageUnitLabel);
    $(stageUnit).append(stageUnitCard);

    return stageUnit;
};

HomeRender.prototype.render = function (stage) {
    var options = HomeRender.prototype.stageUnitDefaults;

    options.Id = "WorkerStageUnit";
    options.Width = "300px";
    options.Height = "300px";
    options.Label.Id = "WorkerStageUnit_Label";
    options.Label.FontSize = "1.5em";
    options.Label.Color = "#AAA";
    options.InfoCard.Id = "WorkerStageUnit_InfoCard";
    options.InfoCard.Color = "#FFF";
    options.InfoCard.Background = "#C0703F";
    options.InfoCard.FontSize = "1.9em";
    var workStageUnit = HomeRender.prototype.buildStageUnit(options);

    $(stage).append(workStageUnit);


    options.Id = "ReadyStageUnit";
    options.Width = "300px";
    options.Height = "300px";
    options.Label.Id = "ReadyStageUnit_Label";
    options.Label.FontSize = "1.5em";
    options.Label.Color = "#AAA";
    options.InfoCard.Id = "ReadyStageUnit_InfoCard";
    options.InfoCard.Color = "#FFF";
    options.InfoCard.Background = "#00C06B";
    options.InfoCard.FontSize = "1.9em";
    var workStageUnit = HomeRender.prototype.buildStageUnit(options);

    $(stage).append(workStageUnit);


    //options.Id = "SuccessStageUnit";
    //options.Width = "300px";
    //options.Height = "300px";
    //options.Label.Id = "SuccessStageUnit_Label";
    //options.Label.FontSize = "1.5em";
    //options.Label.Color = "#AAA";
    //options.InfoCard.Id = "SuccessStageUnit_InfoCard";
    //options.InfoCard.Color = "#FFF";
    //options.InfoCard.Background = "#1470C0";
    //options.InfoCard.FontSize = "1.9em";
    //var workStageUnit = HomeRender.prototype.buildStageUnit(options);

    //$(stage).append(workStageUnit);


    //options.Id = "ErrorStageUnit";
    //options.Width = "300px";
    //options.Height = "300px";
    //options.Label.Id = "ErrorStageUnit_Label";
    //options.Label.FontSize = "1.5em";
    //options.Label.Color = "#AAA";
    //options.InfoCard.Id = "ErrorStageUnit_InfoCard";
    //options.InfoCard.Color = "#FFF";
    //options.InfoCard.Background = "#FF0000";
    //options.InfoCard.FontSize = "1.9em";
    //var workStageUnit = HomeRender.prototype.buildStageUnit(options);

    //$(stage).append(workStageUnit);
};

HomeRender.prototype.startClock = function () {
    alert("startClock");
};

HomeRender.prototype.buildTile = function (options) {
    var tile = document.createElement("div");
    var tileLabel = document.createElement("div");
    var tileInforCard = document.createElement("div");
    var labelHeight = options.Height * .34;
    var infoCardHeight = options.Height * .66;

    //Controe Container - Dinâmico
    $(tile).attr("id", options.Id);
    $(tile).css("width", options.Width);
    $(tile).css("height", options.Height);
    $(tile).css("background", options.Background);
    //Constroe Label - Estático
    // $(tile).attr("class", "StageUnit");
    $(tile).css("margin", "0");
    $(tile).css("cursor", "pointer");

    //Constroe Label - Dinâmico
    $(tileLabel).attr("id", options.Label.Id);
    $(tileLabel).css("font-family", options.Label.FontFamily);
    $(tileLabel).css("color", options.Label.Color);
    $(tileLabel).css("background", options.Label.Background);
    $(tileLabel).css("font-size", options.Label.FontSize);
    $(tileLabel).append(options.Label.Text);
    //Constroe Label - Estático
    $(tileLabel).css("width", "100%");
    $(tileLabel).css("height", (labelHeight) + "px");
    // $(tileLabel).css("border-bottom", "3px solid #ccc");
    $(tileLabel).css("display", "block");
    $(tileLabel).css("float", "none");
    $(tileLabel).css("text-align", "center");
    $(tileLabel).css("overflow", "hidden");
    $(tileLabel).css("cursor", "pointer");

    //Constroe InfoCard - Dinâmico
    $(tileInforCard).attr("id", options.InfoCard.Id);
    $(tileInforCard).css("font-family", options.InfoCard.FontFamily);
    $(tileInforCard).css("color", options.InfoCard.Color);
    $(tileInforCard).css("background", options.InfoCard.Background);
    $(tileInforCard).css("font-size", options.InfoCard.FontSize);
    if (options.InfoCard.Bold) {
        $(tileInforCard).css("font-weight", "bold");
    }

    $(tileInforCard).append(options.InfoCard.Text);
    //Constroe InfoCard - Estático
    $(tileInforCard).css("width", "100%");
    // $(tileInforCard).css("height", "80%");
    $(tileInforCard).css("height", infoCardHeight + "px");
    $(tileInforCard).css("line-height", infoCardHeight + "px");
    $(tileInforCard).css("vertical-align", "middle");
    $(tileInforCard).css("display", "block");
    $(tileInforCard).css("float", "none");
    $(tileInforCard).css("float", "none");
    $(tileInforCard).css("text-align", "center");
    $(tileInforCard).css("overflow", "hidden");
    $(tileInforCard).css("cursor", "pointer");

    //Junto objetos
    $(tile).append(tileLabel);
    $(tile).append(tileInforCard);

    return tile;
}

