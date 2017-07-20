function Car() {
	
	this.element;
	this.velocity;
	var that=this;
	this.pos=Math.floor(Math.random()*2);
	this.x=(120*this.pos)+1;
	this.y=430;

	this.create = function() {
		this.element=document.createElement("div");
		this.element.style.position="absolute";
		this.element.style.top="430px";
		this.element.style.left=this.x+"px";
		this.img=document.createElement("img");
		// this.img.style.width="100px";
		// this.img.style.height="150px";

		this.img.src="images/car2.png";
		this.element.appendChild(this.img);

	}

	this.move = function () {
		if(that.left==true && that.pos!=0) {
			that.x=120*(that.pos-1)+10;
			that.element.style.left=that.x+"px";
			that.left=false;
		}
		if(that.right==true && that.pos!=2) {
			that.x=120*(that.pos+1)+10;
			that.element.style.left=that.x+"px";
			that.right=false;
		}
	}
}