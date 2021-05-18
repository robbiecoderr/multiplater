class Form {
    constructor(){
        this.heading=createElement("h1")
        this.inputbox=createInput("enter your name")
        this.button=createButton("register")
        this.greeting=createElement("h2")
    }
    display()
    {
        this.heading.position(200,150)
        this.heading.html("welcome to car racing game")
        this.inputbox.position(200,250)
        this.button.position(200,300)
        this.button.mousePressed(()=>{
            this.inputbox.hide()
            this.button.hide()
            playercount=playercount+1
            player.position=playercount
            player.writeplayercount(playercount)
            player.name=this.inputbox.value()
            this.greeting.html("hello "+ player.name)
            player.createplayer()
            this.greeting.position(200,300)
        })
    }
    
}
