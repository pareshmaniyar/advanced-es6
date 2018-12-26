//base class
let Job = function() {
  this.pays = true;
}
//prototype method
Job.prototype.print = function(){
  console.log(this.pays?"true":"false");
}
//subclass
let TechJob = function (title, pays) {
  Job.call(this);//set pays
  this.title = title;
  this.pays = pays;
};
//for inhereting from Job's prototype
TechJob.prototype = Object.create(Job.prototype);
TechJob.prototype.constructor = TechJob;
//below method shadows the Job's print method
TechJob.prototype.print = function(){
  console.log(this.pays?"true2":"false2");
}


let softwarePosition = new TechJob('JS', true);
let softwarePosition2 = new TechJob('JS', false);
console.log(softwarePosition.print());
console.log(softwarePosition2.print());




