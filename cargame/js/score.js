function Score () {

	this.element;
	this.width=360;
	this.height=50;
	

	this.create = function() {
		this.element=document.createElement("div");
		// this.element.style.top="600px";
		this.element.style.fontSize="30px";
		// this.element.style.position="absolute";
		// this.element.style.left= "280 px";
		this.element.style.margin= "0 auto";
		this.element.style.width=this.width+"px";
		this.element.style.height=this.height+"px";
		this.element.style.backgroundColor="#05204c";
		this.element.style.color="#ffffff";
		this.element.style.textAlign="Left";
		this.element.style.paddingTop="5px";
		this.element.span=document.createElement("span");
		this.element.span.style.float="right";
		this.element.span.id="fuel";
		this.append(this.element.span);
	}

	this.append = function(element) {
		this.element.appendChild(element);
	}
}