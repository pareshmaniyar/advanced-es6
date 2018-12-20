var LivingEntity = function(location){
	this.x = location.x;
	this.y = location.y;
	this.z = location.z;
};

//New instance
var dog = new LivingEntity({
	x: 5,
	y: 0,
	z: 1
});
LivingEntity.prototype.moveWest = function(){
    this.x--;
    console.log(this);
}
//x,y,z ---> moveWest
LivingEntity.prototype.makeSound = () => {
	console.log('meow');
}
//x,y,z ---> moveWest, makeSound

//dog uses its prototype because it doesn't have makeSound as an attribute
dog.makeSound(); //meow
dog.moveWest();//LivingEntity { x: 4, y: 0, z: 1 }
dog.moveWest();//LivingEntity { x: 3, y: 0, z: 1 }
dog.makeSound = function(){
	console.log('woof');
}
//x,y,z,makeSound ---> moveWest, makeSound

//now dog has makeSound as an attribute, it will use that instead of it's prototype
dog.makeSound(); //woof

var Dragon = function(location){  
    /*
     * <Function>.call is a method that executes the defined function,
     * but with the "this" variable pointing to the first argument,
     * and the rest of the arguments being arguments of the function
     * that is being "called". This essentially performs all of
     * LivingEntity's constructor logic on Dragon's "this".
     */
    LivingEntity.call(this, location);
    //canFly is an attribute of the constructed object and not Dragon's prototype
    this.canFly = true;
};

//x,y,z, canFly

/*
 * Object.create(object) creates an object with a prototype of the
 * passed in object. This example will return an object
 * with a prototype that has the "moveWest" and "makeSound" functions,
 * but not x, y, or z attributes.
 */
Dragon.prototype = Object.create(LivingEntity.prototype);
// x,y,z,canFly -->  moveWest, makeSound

/*
 * If we didn't reset the prototype's constructor
 * attribute, it would look like any Dragon objects
 * were constructed with a LivingEntity constructor
 */
Dragon.prototype.constructor = Dragon;

/*
 * Now we can assign prototype attributes to Dragon without affecting
 * the prototype of LivingEntity.
 */
Dragon.prototype.fly = function(y){  
    this.y += y;
}

var sparky = new Dragon({  
    x: 0,
    y: 0,
    z: 0
});
/*
sparky:
x
y
z
canFly
sparky.prototype (Dragon.prototype):
fly
sparky.prototype.prototype (LivingEntity.prototype):
makeSound
moveWest
sparky.prototype.prototype.prototype (Object.prototype):
create
toString
etc...
*/



