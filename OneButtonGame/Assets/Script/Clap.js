#pragma strict

var leftHand : Transform;
var rightHand : Transform;

var normalHandDistance : float = 2.5;
var clapHandDistance : float = 0.5;

var minimumClapLength : float = 0.1;
var timeSinceClapStarted : float = 0.0;

function Start () {

	leftHand.position.x = -normalHandDistance;
	rightHand.position.x = normalHandDistance;

}

function Update () {

	if(Input.GetKey(KeyCode.Space)){

		timeSinceClapStarted += Time.deltaTime;

		if(timeSinceClapStarted > minimumClapLength) {
			leftHand.position.x = -clapHandDistance;
			rightHand.position.x = clapHandDistance;
			Debug.Log("butss");
		}
	}

	if(Input.GetKeyUp(KeyCode.Space)){

		if(timeSinceClapStarted > minimumClapLength){
			
			var enemies = GameObject.FindGameObjectsWithTag("enemy");

			for(var enemy in enemies){

				enemy.SendMessage("Kill");
			}

			//GetComponent.<AudioSource>().Play();

			leftHand.position.x = -normalHandDistance;
			rightHand.position.x= normalHandDistance;
		}

		timeSinceClapStarted = 0;
	}

	var moX : float = Input.GetAxis("Mouse X") * 2;
	transform.Translate(moX,0,0);

}