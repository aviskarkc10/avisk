function  Fuel() {
	
	this.element;
	this.pos;
	this.x;
	this.y;
	var that=this;
	this.velocity;
	this.parent;

	this.create = function(container) {
		this.element=document.createElement("div");
		this.pos=Math.floor(Math.random()*3);
		this.x=(this.pos*120)+10;
		this.y=-150;
		this.element.id="gasoline";
		this.element.style.position="absolute";
		this.velocity=5;
		this.element.style.top=this.y+"px";
		this.element.style.left=this.x+"px";
		this.img=document.createElement("img");
		// this.img.style.width="100px";
		// this.img.style.height="150px";
		this.parent=container;
		this.img.src="images/gasoline.png";
		this.element.appendChild(this.img);
		

	}

	this.updateVelocity=function(v) {
		that.velocity=v;
	}

	
	this.move = function() {
		
		if(that.y<600){
			that.y=that.y+that.velocity;
			that.element.style.top=that.y+"px";
		}
		else if (document.getElementById("gasoline")){
			document.getElementById("gasoline").remove();
		}
	}
		
}