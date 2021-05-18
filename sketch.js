var gamestate=0, playercount=0
var database,form
var game, player
function setup(){
    createCanvas(500,500);
    database=firebase.database()
    game=new Game()
    game.readgamestate()
    if (gamestate==0)
    {
        form=new Form()
        player=new Player()
        player.readplayercount()
        form.display()
    }
}

function draw(){
   
    background("white");
  if (playercount==2){
      game.writegamestate(1)
  }
  if(gamestate==1){
game.playthegame()
  }
}
