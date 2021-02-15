var canvas;
var gameState=0
var contestantCount, database, quiz, question,contestant;
var allplayers;

function setup(){
  canvas = createCanvas(850,400);
  database=firebase.database()
  quiz=new Quiz()
  quiz.getState()
  quiz.start()
  
}


function draw(){
  background("pink");
  if(contestantCount===4){
    quiz.UpdateState(1);
    
  }
  if(gameState===1){
 
    clear();
    quiz.play()
    
   
  }

  
}
