#pragma strict

var inKillZone : boolean = false;
//var target : Transform;
var moveSpeed: int = 5;
var myTransform : Transform;

function Start(){
	//Spawner.target;
}

function Update() {
	myTransform.LookAt(Spawner.target);

	myTransform.position += myTransform.forward * moveSpeed * Time.deltaTime;
}

function OnTriggerEnter (other: Collider){
	if(other.name == "kill zone") {

		inKillZone = true;
	}
}

function OnTriggerExit (other:Collider){

	if(other.name == "kill zone"){

		inKillZone = false;
	}
}

function TryToKill(){

	if(inKillZone){
		gameObject.SendMessage("Kill");
	}
}

function Kill(){
	//GameObject.Find("/text/score").SendMessage("Increment");
	gameObject.tag = "Untagged";
	Destroy(this);
}