class Launcher{
	constructor(body,point)
	{
		
		var options={ bodyA:body,			 
			pointB:point, 
			stiffness:0.04, 
			length:20
			
		}
		
		this.bodyA=body
		this.pointB=point
		this.launcher=Constraint.create(options)
		World.add(world,this.launcher)
	}

	attach(body){
		this.launcher.bodyA=body;
	}

	fly()
	{
		this.launcher.bodyA=null;
	}

	display()
	{
		if(this.launcher.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}