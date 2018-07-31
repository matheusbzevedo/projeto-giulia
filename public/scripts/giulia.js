$("<div></div>", {id: "avatar", class: "avatar"})
.appendTo('body')
.html("\
	<div id='avatar-canvas'>\
		<div id='avatar-body'></div>\
		<div id='div-button'>\
			<button id='avatar-button'>\
				<img src='https://www.projetogiulia.com.br/assets/img/favicon-giulia.png' width='40px' />\
			</button>\
		</div>\
	</div>\
");

$.getScript("https://www.projetogiulia.com.br/avatar/TemplateData/UnityProgress.js");
$("head").append("<link rel='stylesheet' href='https://www.projetogiulia.com.br/avatar/css/avatar.min.css' type='text/css' />");
addEventListener("mouseover", AdicionarRemoverClasse);

$("#avatar-button").on("click", function() {
	if($('#avatar-body').hasClass("avatarShow")) {
		$("#avatar-body").removeClass("avatarShow");
		$("#avatar-body").addClass("avatarUnshow");
	} else {
		$("#avatar-body").removeClass("avatarUnshow");
		$("#avatar-body").addClass("avatarShow");
	}

	if($("#avatar-body").attr("class").match(/avatarShow/))
		$('head').append('<link rel="stylesheet" href="https://www.projetogiulia.com.br/avatar/css/giulia.min.css" type="text/css" />');
	else
		$("link[rel=stylesheet][href~='https://www.projetogiulia.com.br/avatar/css/giulia.min.css']").remove();

	if($("#avatar-body").html() == "") {
		$("#avatar-body").html("<div id='mini-bar'><img src='https://www.projetogiulia.com.br/assets/img/favicon-giulia.png' class='favicon-giulia'><a href='https://www.projetogiulia.com.br' target='_blank' class='giulia-link'>www.projetogiulia.com.br</a></div><canvas class='emscripten' id='canvas' oncontextmenu='event.preventDefault()' height='400px' width='250px'></canvas>");
		$.getScript("https://www.projetogiulia.com.br/avatar/Release/UnityLoader.js");
	}
});

function FuncaoTantoFaz(val){
	if(val == 0){
		addEventListener("click", function (e){
			if($(".giulia").prop("tagName") == "A" && !$(".giulia").attr("class").match(/giulia-link/))
				e.preventDefault();
			if($("#avatar-body").attr("class").match(/avatarShow/) && $(".giulia").prop("tagName") != "CANVAS" && $(".giulia").prop("tagName") != "IMG")
				readText($(".giulia").text());
		});
	}
}

function AdicionarRemoverClasse(event) {
	$(event.target).addClass("giulia");
	this.addEventListener("mouseout", function(){
		$(event.target).removeClass("giulia");
	});
}

function readText(string) {
	SendMessage("PlayerManager", "start_inputfield_web_play", string);
};

function onLoadPlayer() {};

function FuncaoTopest(side){
	if(side == "RIGHT") {
		$("#avatar").addClass("avatarRight");
		$("#avatar-body").addClass("bodyInRight");
		$("#avatar-button").addClass("bodyInRight");
	} else if(side == "LEFT") {
		$("#avatar").removeClass("avatarRight");
		$("#avatar-body").removeClass("bodyInRight");
		$("#avatar-button").removeClass("buttonInRight");
	}
};

var Module = {
	TOTAL_MEMORY: 419430400,
	errorhandler: null,
	compatibilitycheck: null,
	backgroundColor: "#FFFFFF",
	splashStyle: "Dark",
	dataUrl: "https://www.projetogiulia.com.br/avatar/Release/avatar.datagz",
	codeUrl: "https://www.projetogiulia.com.br/avatar/Release/avatar.jsgz",
	memUrl: "https://www.projetogiulia.com.br/avatar/Release/avatar.memgz",
	backgroundImage: "https://www.projetogiulia.com.br/avatar/background.png"
};