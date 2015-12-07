#pragma strict

var enemy : GameObject;
static var target : Transform;
var i : float;

function Start () {
	
	Spawn();

	target = GameObject.FindWithTag("Player").transform;

}


function Spawn(){

	for(i = 0; i < 10; i++){

		yield WaitForSeconds(1);
		Instantiate(enemy, Vector3(Random.Range(-7.5,7.5), Random.Range(-7.5,7.5), 10), Quaternion.identity);
	
	}
}