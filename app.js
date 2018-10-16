

new Vue({
	el: '#app',
  data: {
  	win: 0,
    lose: 0,
    tie: 0,
    computer: '',
    you: '',
    randomNumber: 0,
    user: 0
  },
  methods:{
  	randomGenerator: function(rps){
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
      }else if(this.you == 'Paper' && this.computer == 'Rock'){
      	this.win++;
      }else if(this.you == 'Scissors' && this.computer == 'Paper'){
      	this.win++;
      }else if(this.you == 'Paper' && this.computer == 'Scissors'){
      	this.lose++;
      }else if(this.you == 'Rock' && this.computer == 'Paper'){
      	this.lose++;
      }else if(this.you == 'Scissors' && this.computer == 'Rock'){
      	this.lose++;
      }else if(this.you == this.computer){
      	this.tie++;
      }
    }
  }
})
