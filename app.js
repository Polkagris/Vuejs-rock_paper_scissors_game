
new Vue({
	el: '#app',
  data: {
  	win: 0,
    bWin: false,
    lose: 0,
    bLose: false,
    tie: 0,
    bTie: false,
    computer: '',
    you: '',
    randomNumber: 0,
    user: 0
  },

  methods:{
  	randomGenerator: function(rps){
      // Generate two random numbers, one for user and one for computer
    	this.randomNumber = Math.floor((Math.random() * 3) + 1);
      this.user = Math.floor((Math.random() * 3) + 1);

      // Display computer choice
      switch(this.randomNumber){
      	case 1:
        	this.computer = 'Rock'
        break;
        case 2:
        	this.computer = 'Paper'
        break;
        case 3:
        	this.computer = 'Scissors'
        break;
      }
      // Display user choice
      switch(rps){
      	case 0:
        	this.you = 'Rock'
        break;
        case 1:
        	this.you = 'Paper'
        break;
        case 2:
        	this.you = 'Scissors'
        break;
      }
   		// Game logic
      if(this.you == 'Rock' && this.computer == 'Scissors'){
      	this.win++;
        this.bWin = true;
        this.bLose = false;
        this.bTie = false;
      }else if(this.you == 'Paper' && this.computer == 'Rock'){
      	this.win++;
        this.bWin = true;
        this.bLose = false;
        this.bTie = false;
      }else if(this.you == 'Scissors' && this.computer == 'Paper'){
      	this.win++;
        this.bWin = true;
        this.bLose = false;
        this.bTie = false;
      }else if(this.you == 'Paper' && this.computer == 'Scissors'){
      	this.lose++;
        this.bWin = false;
        this.bLose = true;
        this.bTie = false;
      }else if(this.you == 'Rock' && this.computer == 'Paper'){
      	this.lose++;
        this.bWin = false;
        this.bLose = true;
        this.bTie = false;
      }else if(this.you == 'Scissors' && this.computer == 'Rock'){
      	this.lose++;
        this.bWin = false;
        this.bLose = true;
        this.bTie = false;
      }else if(this.you == this.computer){
      	this.tie++;
        this.bTie = true;
        this.bLose = false;
        this.bWin = false;
      }
    },
    resetScoreboard: function(){
      this.win = 0;
      this.bWin = false;
      this.lose = 0;
      this.bLose = false;
      this.tie = 0;
      this.bTie = false;
    }
  }
})
