class Player
{
    constructor()

    {
this.name=""
this.distance=0
this.position=0
    }
    writeplayercount(n){
        database.ref("/").update({
            playercount:n
        })
    }
    readplayercount()
    {
        var playervaule=database.ref("playercount")
        playervaule.on("value",function
        (data){
            playercount=data.val()
        })  
    }
    createplayer()
    {
      var p="allplayers/player"+this.position
      database.ref(p).set({
          name:this.name,
          distance: this.distance,
      })  
    }
}