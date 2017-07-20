function GameController(element) {
	
	var element=document.getElementById(element);
	var container;
	var score;
	var lanes;
	var roadblocks;
	var y;
	var bool;
	var fuel;

	this.init = function() {

		container = new Container();
		score= new Score();
		car = new Car();
		lanes = [];
		roadblocks=[]
		fuel = new Fuel();
		y=550;
		bool = true;
		
		container.create();
		element.appendChild(container.element);

		score.create();
		element.appendChild(score.element);

		fuel.create(container.element);
		container.append(fuel.element);

		car.create();
		container.append(car.element);

		for (var i=0; i<4;i++)
		{
			roadblocks[i]=new RoadBlocks();
			roadblocks[i].spawnWaves(i, bool);
			container.append(roadblocks[i].element);
		}

		for (i=0;i<10;i++){

			lanes[i]=new Lane();
			if(i%2==0){
				lanes[i].create("left", y);
			}
			else {
				lanes[i].create("right", y);
				y-=150;
			}
			container.append(lanes[i].element);

		}
		
		var animator = new Animator(car, container, lanes, roadblocks, score, gameController, fuel);
		animator.animate();
	}

	this.delete = function () {
		element.removeChild(container.element);
		element.removeChild(score.element);
		gameController.init();
	}

}

var gameController= new GameController("gameController");
gameController.init();



