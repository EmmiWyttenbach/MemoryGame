    var randomizeCards = function()
    {
        var cardAssembly = ["cat https://www.catster.com/wp-content/uploads/2017/08/Pixiebob-cat.jpg", 
        "cat https://www.catster.com/wp-content/uploads/2017/08/Pixiebob-cat.jpg", 
        "dog https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13001000/Beagle-On-White-01-400x267.jpg", 
        "dog https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13001000/Beagle-On-White-01-400x267.jpg", 
        "fish http://www.firstaidforfree.com/wp-content/uploads/2015/02/FISHSHAPED.png", 
        "fish http://www.firstaidforfree.com/wp-content/uploads/2015/02/FISHSHAPED.png", 
        "frog https://s.hswstatic.com/gif/frog-1.jpg", 
        "frog https://s.hswstatic.com/gif/frog-1.jpg",
        "elephant https://razzonline.com/wp-content/uploads/2017/07/an-elephant-.jpg", 
        "elephant https://razzonline.com/wp-content/uploads/2017/07/an-elephant-.jpg", 
        "giraffe https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/g/giraffe_thumb.JPG", 
        "giraffe https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/g/giraffe_thumb.JPG", 
        "turtle https://upload.wikimedia.org/wikipedia/commons/9/9f/Giraffe_standing.jpg", 
        "turtle https://upload.wikimedia.org/wikipedia/commons/9/9f/Giraffe_standing.jpg", 
        "llama https://upload.wikimedia.org/wikipedia/commons/9/9f/Giraffe_standing.jpg", 
        "llama https://upload.wikimedia.org/wikipedia/commons/9/9f/Giraffe_standing.jpg"];

        for(let i = 0; i < cardAssembly.length; i++)
         {
            var randomI = Math.floor(Math.random() * (cardAssembly.length));
            var temp = cardAssembly[i];
            cardAssembly[i] = cardAssembly[randomI];
            cardAssembly[randomI] = temp;
         }
         for(let x = 0; x < 4; x++)
         {
            let space = cardAssembly[x].indexOf(' ');
            let end = cardAssembly[x].length - 1;
            let urlString = cardAssembly[x].substr(space,end);
            console.log(urlString);
            document.getElementById("a" + x).value = cardAssembly[x].substr(0,space);
            document.getElementById("a" + x).style.backgroundImage = "url('"+urlString+"')";
         }
         for(let x = 0; x < 4; x++)
         {
            let space = cardAssembly[x+4].indexOf(' ');
            let end = cardAssembly[x+4].length - 1;
            let urlString = cardAssembly[x+4].substr(space,end);
            document.getElementById("b" + x).value = cardAssembly[x+4].substr(0,space);
            console.log(urlString);
            
            document.getElementById("b" + x).style.backgroundImage = "url('"+urlString+"')";
         }
         for(let x = 0; x < 4; x++)
         {
            let space = cardAssembly[x+8].indexOf(' ');
            let end = cardAssembly[x+8].length - 1;
            let urlString = cardAssembly[x+8].substr(space,end);
            console.log(urlString);
            document.getElementById("c" + x).value = cardAssembly[x+8].substr(0,space);
            document.getElementById("c" + x).style.backgroundImage = "url('"+urlString+"')";
         }
         for(let x = 0; x < 4; x++)
         {
            let space = cardAssembly[x+12].indexOf(' ');
            let end = cardAssembly[x+12].length - 1;
            let urlString = cardAssembly[x+12].substr(space,end);
            console.log(urlString);
            document.getElementById("d" + x).value = cardAssembly[x+12].substr(0,space);
            document.getElementById("d" + x).style.backgroundImage = "url('"+urlString+"')";
         }
        console.log(cardAssembly);
    }

 var gameLogic = function() {
        var countClicks = 0;
        $('.card').on('click', function() {
            if(countClicks == 0)
            {
               document.getElementById(this.id).style.color = "white";
               document.getElementById(this.id).className += " clicked";
               countClicks++;
            }
            else if(countClicks == 1)
            {
                let firstElementClicked = document.getElementsByClassName('clicked');

                if(document.getElementById(this.id) != firstElementClicked[0])
                {
                   document.getElementById(this.id).style.color = "white";
                   document.getElementById(this.id).className += " clicked";
                   countClicks++;
                }
            }
            if(countClicks == 2)
            {
            setTimeout(function(){
               var listOfClickedCards = document.getElementsByClassName("clicked");
               if(listOfClickedCards[0].value != listOfClickedCards[1].value)
               {
                   listOfClickedCards[0].style.color = "transparent";
                   listOfClickedCards[1].style.color = "transparent";
               }
               else
               {
                   alert("good job they match");
               }
               listOfClickedCards[0].className = 'card';
               listOfClickedCards[0].className = 'card';
               countClicks = 0;
               console.log(listOfClickedCards.length);
               }, 1000);
           } 
           
        });
        
}