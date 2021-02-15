class Contestant{

    constructor(){
    
    this.index=null;
    this.name=""
    this.answer=""
    }
    
    //to get/fetch the playerCount from the DB
    getPlayerCount(){
        var dbref = database.ref("contestantCount"); //dbref contains the location of the DB
        dbref.on("value",function(data){
            contestantCount=data.val();
        })
    
    }
    
    //to update the playerCount to the DB
    updateCount(c){
        //var dbref = database.ref('/');
        database.ref('/').update({
            contestantCount:c
        })
    
    }
    
    //.ref ---> to go to a particular location in the DB
    //.set and .update -->to save values in the DB
    //.on -->fetch the value from DB
    
    
    // to update the name and distance covered by the player in the DB
    update(){
    
        var location = "contestant/contestant" + this.index;
        var dbref = database.ref(location);
        dbref.set({
            name: this.name,
            answer:this.answer
        })
    
    
    }
    
    //static functions are called by the class name not the object name
    //we are creating this function here since its related to the players 
    
     static getPlayersInfo(){
        var dbref = database.ref("contestant");
         dbref.on("value",(d)=>{
         allplayers = d.val();
         })   
    }
    
    
    }