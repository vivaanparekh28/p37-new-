class Question{
    constructor(){
        this.title=createElement('h1')
        this.question=createElement("h1")
        this.answer=createElement("h1")
        this.answer2=createElement("h1")
        this.answer3=createElement("h1")
        this.answer4=createElement("h1")
        this.name=createInput("Enter your name")
        this.answ=createInput("Enter answer number")
        this.button=createButton("SUBMIT")
        }
        display(){
            this.title.html("Quiz!")
this.title.position(350,0)
    
            this.question.html("What starts with E and ends with E but only has one letter")
            this.question.position(150,50)
            this.answer.html("1.Eye")
            this.answer.position(150,120)
            this.answer2.html("2.Everyone")
            this.answer2.position(150,160)
            this.answer3.html("3.Envelope")
            this.answer3.position(150,200)
            this.answer4.html("4.Example")
            this.answer4.position(150,240)
            this.name.position(50,320)
            this.answ.position(240,320)
            this.button.position(180,360)

            this.button.mousePressed(()=>{
                this.name.hide()
                this.answ.hide()
                contestant.name=this.name.value()
                contestant.answer=this.answ.value()
                contestantCount+=1
                contestant.index=contestantCount
                contestant.update()
                contestant.updateCount(contestantCount)
            })
        }
}