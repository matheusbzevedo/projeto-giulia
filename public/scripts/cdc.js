function FuncaoTantoFaz(a) {
    0 == a && addEventListener("click", (a) => {
        "CANVAS" != $(".giulia").prop("tagName") && readText("IMG" == $(".giulia").prop("tagName") ? a.target.alt : $(".giulia").text().match(/list/) ? $(".giulia").text().replace("list", "") : $(".giulia").text());
    });
}

function AdicionarRemoverClasse(a) {
    $(a.target).addClass("giulia"), this.addEventListener("mouseout", () => {
        $(a.target).removeClass("giulia")
    });
}

function readText(a) {
    SendMessage("PlayerManager", "start_inputfield_web_play", a)
}

function onLoadPlayer() {}

$.getScript("https://www.projetogiulia.com.br/cdc/avatar/Release/UnityLoader.js"), $("head").append('<link rel="stylesheet" href="https://www.projetogiulia.com.br/cdc/avatar/css/giulia.css" type="text/css" />'), $.getScript("https://www.projetogiulia.com.br/cdc/avatar/TemplateData/UnityProgress.js"), addEventListener("mouseover", AdicionarRemoverClasse);

var Module = {
    TOTAL_MEMORY: 419430400,
    errorhandler: null,
    compatibilitycheck: null,
    backgroundColor: "#FFFFFF",
    splashStyle: "Dark",
    dataUrl: "/avatar/cdc/Release/avatar.data",
    codeUrl: "/avatar/cdc/Release/avatar.js",
    memUrl: "/avatar/cdc/Release/avatar.mem",
    backgroundImage: "/avatar/cdc/background.png"
};