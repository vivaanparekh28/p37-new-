class Quiz{
constructor(){

}
UpdateState(s){
var dbref=database.ref("/")
dbref.update({
    gameState:s 
    });
}
getState(){
    var dbref=database.ref("gameState")
     dbref.on("value",function (r){
 gameState=r.val()
     })
 
 }
 async start(){
     if (gameState===0){
         contestant=new Contestant()
         var contestantCountRef=await database.ref('contestantCount').once("value")
         if (contestantCountRef.exists()){
            contestantCount=contestantCountRef.val()
            contestant.getPlayerCount()
         }
         question=new Question()
         question.display()
     }
 }
 play(){

    

    Contestant.getPlayersInfo()

    if(allplayers!=undefined){
        background("yellow")
        var ypos=150
for(var plr in allplayers){
    var correctanswer="3"
    if(correctanswer===allplayers[plr].answer){
        fill("green")
    }
    else{
        fill("red")
    }
    textSize(20)

text(allplayers[plr].name + ":" + allplayers[plr].answer,400,ypos)
ypos=ypos+50
text("the answer was ENVELOPE!!",500,200)
}
       

}
} 
}
