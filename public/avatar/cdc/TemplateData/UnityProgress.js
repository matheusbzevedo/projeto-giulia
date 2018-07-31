function UnityProgress (dom) {
	this.progress = 0.0;
	this.message = "";
	this.dom = dom;

	var parent = dom.parentNode;

	var background = document.createElement("div");
	background.style.background = Module["backgroundColor"] ? Module["backgroundColor"] : "#4D4D4D";
	background.style.position = "absolute";
	background.style.overflow = "hidden";
	parent.appendChild(background);
	this.background = background;

	if (Module["backgroundImage"])
	{
		var backgroundImg = document.createElement("img");
		backgroundImg.src = Module["backgroundImage"];
		backgroundImg.style.position = "absolute";
		backgroundImg.style.width = "100%";
		backgroundImg.style.height = "auto";
		backgroundImg.style.top = "50%";
		backgroundImg.style.transform = "translate(0, -50%)";
		background.appendChild(backgroundImg);
	}

	var messageArea = document.createElement("p");
	messageArea.style.position = "absolute";
	parent.appendChild(messageArea);
	this.messageArea = messageArea;

	this.SetProgress = function (progress) {
		if (this.progress < progress)
			this.progress = progress;
		this.messageArea.style.display = "none";
		this.Update();
	}

	this.SetMessage = function (message) {
		this.message = message;
		this.background.style.display = "inline";
		this.Update();
	}

	this.Clear = function() {
		this.background.style.display = "none";
	}

	this.Update = function() {
		this.background.style.top = this.dom.offsetTop + 'px';
		this.background.style.left = this.dom.offsetLeft + 'px';
		this.background.style.width = this.dom.offsetWidth + 'px';
		this.background.style.height = this.dom.offsetHeight + 'px';
	}
	this.Update ();
}