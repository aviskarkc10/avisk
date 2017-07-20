function Animator(car, container, lanes, roadblocks, score, gameController, fuel) {

	var intervalId;
  	var that = this;
  	var checkKeyDown;
  	var checkKeyUp;
  	this.distance=0;
  	this.game=true;
  	this.container=container;
  	this.car=car;
  	this.lanes=lanes;
  	this.roadblocks=roadblocks;
  	this.score=score;
  	this.gameController=gameController;
  	this.fuel=fuel;
  	this.fuelTank=100;
  	var fuelCollided=false;
  	this.lastFuel=100;

  	this.animate = function () {

	  		that.intervalId=setInterval (function(){

	  			if(that.game==true){

		  			that.updateDistance();
		  
		  			document.onkeydown=checkKeyDown;
		  			
		  			
		  			that.move(car);
		  			that.setCarPos(car);

		  			that.move(fuel);
		  			
		  			for(var i=0; i<10;i++)
		  			{
		  				that.move(lanes[i]);
		  				that.updateVelocity(lanes[i]);
		  			}
		  			if(document.getElementById("gasoline")) {
		  				that.checkFuelCollision(car, fuel);
		  				that.updateVelocity(fuel);
		  			}
		  			else {
		  				var temp=Math.floor(Math.random())*50;
		  				if(temp==0 && (that.lastFuel-that.fuelTank>25)){
		  					that.lastSpawnFuel=new Date().getMilliseconds();
		  					fuel.create(container.element);
							container.append(fuel.element);
		  				}
		  			}

		  			for(var i=0; i<4; i++)
		  			{
		  				
		  				that.checkCollision(roadblocks[i], car);
		  				if(roadblocks[3].y>600)
		  				{
		  					that.spawn(roadblocks[i]);
		  				}

		  				else {
		  					that.move(roadblocks[i]);
		  					that.updateVelocity(roadblocks[i]);
		  				}
		  			}
		  			
		  		}
		  		else if (that.game==false){
		  			setTimeout(function() {
		  				// that.container.element.style.marginTop="200px";
		  				that.container.element.style.textAlign="center";
		  				that.container.element.style.fontSize="30px";
		  				that.container.element.innerHTML="Game Over. Press Enter to restart";
		  			}, 2000);
		  			
		  		}


	  		}, 1000/60);
	  	
  	}

  	this.updateDistance = function() {
  		that.distance=that.distance+0.1;
  		if(that.fuelTank>0){
  			that.fuelTank-=0.1;
  		}
  		if(that.fuelTank<1){
  			that.fuelTank=0;
  		}
  		that.score.element.innerHTML="Distance: "+Math.floor(that.distance)+" Fuel "+Math.floor(that.fuelTank);
  		
  		
  		// that.score.element.span.innerHTML="Fuel: "+Math.floor(that.fuelTank);
  		// debugger;

  	}

  	this.updateVelocity = function(object){

  		if(that.distance>30 && that.fuelTank>10) {
  			object.updateVelocity(10);
  		}
  		else if(that.fuelTank<10 && that.fuelTank>=0)
  		{
  			object.updateVelocity(that.fuelTank)
  		}
  	}

  	this.spawn = function(){
  		for (var i=0; i<4;i++)
		{
			roadblocks[i].spawnWaves(i, false);
		}

  	}

  	this.move = function(object) {  		
  		object.move();
  	}

  	this.setCarPos= function(car) {

  		if(car.x==10) {
  			car.pos=0;
  		}

  		if(car.x==130) {
  			car.pos=1;
  		}

  		if(car.x==250) {
  			car.pos=2;
  		}

  	}

  	this.checkCollision = function(r, c) {
  		
  		if(((580>r.y+40 && r.y+40>430) && c.pos==r.pos) || that.fuelTank<=0)
  		{
  			that.game=false;
  			document.onkeydown=checkKeyDown;
  		}
  	}


  	this.checkFuelCollision = function(c, f) {

  		if(((580>f.y+64 && f.y+64>430) && c.pos==f.pos))
  		{
  			that.fuelTank=that.fuelTank+25;
  			that.lastFuel=that.fuelTank;
  			document.getElementById("gasoline").remove();
  		}
  	}

  	checkKeyDown = function (e) {

  		if (e.keyCode == '37') {
       	// left arrow
       		
       		that.car.left=true;

    	}
    	else if (e.keyCode == '39') {
       // right arrow
       		
       		that.car.right=true;
    	}
    	else if(e.keyCode== '13' && that.game==false) {
    		//enter
    		that.gameController.delete();
    	}
    	
  	}
}