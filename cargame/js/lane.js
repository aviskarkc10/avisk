function Lane() {

	this.element;
	this.velocity;
	var that=this;

	this.create = function(type, y) {
		this.type=type;
		this.y=y;
		this.velocity=5;
		this.element=document.createElement("div");
		this.element.style.position="absolute";
		this.element.style.width="10px";
		this.element.style.height="50px";
		this.element.style.backgroundColor="#ffffff";
		if(this.type=="left"){
			this.x=115;
		}
		else {
			this.x=235;
		}
		this.y=y;
		this.element.style.left=this.x+"px";
		this.element.style.top=this.y+"px";
		// this.img.style.width="100px";
		// this.img.style.height="150px";


	}

	this.updateVelocity=function(v) {
		that.velocity=v;
	}
	

	this.move = function() {
		if(that.y<600){
			that.y=that.y+that.velocity;
			that.element.style.top=that.y+"px";
		}

		else {
			that.y=-150;
			that.element.style.top=that.y+"px";


		}
	}
}