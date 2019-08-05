var rover= {
    direction= "North",
    X= 0,
    Y= 0,
    travelLog= []
}


function turnLeft(rover){
  switch (rover.direction) {
    case "N": "W"
      break;
    case "W": "S"
      break;
    case "S": "E"
      break;
    case "E": "N"
      break;
  }
  console.log("turnLeft was called!");
}

function turnRight(rover){
  switch (rover.direction) {
    case "N": "E"
      break;
    case "W": "N"
      break;
    case "S": "W"
      break;
    case "E": "S"
      break;
  }
  console.log("turnRight was called!");
}

function moveForward(rover){
  switch (rover.X) {
    case rover.direction= "E": rover.x +=1
      break;
    case rover.direction = "W": rover.X-=1
      break;
  }
  switch (rover.Y) {
    case rover.direction= "N": rover.Y+=1
      break;
    case rover.direction= "S": rover.Y-=1
      break;
  }
  travelLog.push((X,Y))
  console.log("moveForward was called")
}

function commands(str){
      for(var i=0; i< str.length; i++){
          if(str[i]== "f"){
            moveForward
          }
        if (str[i] == "l") {
          turnLeft
        }
        if(str[i]== "r"){
          turnRight
        }
      }
        console.log(travelLog);
} 