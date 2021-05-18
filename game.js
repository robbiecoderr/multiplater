class Game
{
    constructor()

    {

    }
    writegamestate(n){
        database.ref("/").update({
            gamestate:n
        })
    }
    readgamestate()
    {
    var gamevaule=database.ref("gamestate")
    gamevaule.on("value",function
    (data){
        gamestate=data.val()
    })
    }
    playthegame(){
        
    }
}