function Container () {

	this.element;
	this.width=360;
	this.height=600;
	

	this.create = function() {
		this.element=document.createElement("div");
		this.element.style.width= this.width+"px";
		this.element.style.height=this.height+"px";
		this.element.style.overflow="hidden";
		this.element.style.margin= "0 auto";
		this.element.style.marginTop= "10px";
		this.element.style.background="#bab3b2";
		this.element.style.position="relative";

	}

	this.append = function(element) {
		this.element.appendChild(element);
	}
}

