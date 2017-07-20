function  RoadBlocks() {
	
	this.element;
	this.pos;
	this.x;
	this.y;
	var that=this;
	this.velocity;

	this.create = function(x, y, pos) {
		this.element=document.createElement("div");
		this.element.style.position="absolute";
		this.pos=pos;
		this.x=x;
		this.y=y;
		this.velocity=5;
		this.element.style.top=this.y+"px";
		this.element.style.left=this.x+"px";
		this.img=document.createElement("img");
		// this.img.style.width="100px";
		// this.img.style.height="150px";

		this.img.src="images/roadblock.png";
		this.element.appendChild(this.img);

	}

	this.updateVelocity=function(v) {
		that.velocity=v;
	}

	
	this.move = function() {
		that.y=that.y+that.velocity;
		that.element.style.top=that.y+"px";
	}

	this.newEnemies = function(x, y, pos) {
		this.pos=pos;
		this.x=x;
		this.y=y;
		this.element.style.top=this.y+"px";
		this.element.style.left=this.x+"px";	
	}



	this.spawnWaves= function(a, first) {

		var j=Math.floor(Math.random()*2)+1;
		var i=a;
		var pos, x, y;
		if(j==1) {
			
			pos=Math.floor(Math.random()*3);
			y=(-350)*(i+1);
			
		}

		else if (j==2) {
			if(i==1 || i==2)
			{
				y=-700;
				if(i==1)
				{
					pos=1;
				}
				else if (i==2)
				{
					pos=Math.floor(Math.random()*2)*2;
				}

			}
			else if (i==3){
				y=-1050;
				pos=Math.floor(Math.random()*2)*2;
			}
			else{
				y=-350;
				pos=Math.floor(Math.random()*2)*2;
				x=pos*120+10;
			}

		}
		if(pos==0) {
  			x=10;
  		}

  		else if(pos==1) {
  			x=130;
  		}

  		else if(pos==2) {
  			x=250;
  		}
		if(first==true){
			that.create(x,y, pos);
		}
		else {
			that.newEnemies(x,y, pos);
		}
	} 
		
}