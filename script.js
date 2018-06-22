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
        "turtle https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Florida_Box_Turtle_Digon3_re-edited.jpg/1200px-Florida_Box_Turtle_Digon3_re-edited.jpg", 
        "turtle https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Florida_Box_Turtle_Digon3_re-edited.jpg/1200px-Florida_Box_Turtle_Digon3_re-edited.jpg", 
        "llama https://www.exoticmeatmarkets.com/v/vspfiles/photos/LLAMASAUSAGECAJUN16-2T.jpg", 
        "llama https://www.exoticmeatmarkets.com/v/vspfiles/photos/LLAMASAUSAGECAJUN16-2T.jpg"];

        for(let i = 0; i < cardAssembly.length; i++)
         {
            var randomI = Math.floor(Math.random() * (cardAssembly.length));
            var temp = cardAssembly[i];
            cardAssembly[i] = cardAssembly[randomI];
            cardAssembly[randomI] = temp;
         }

         for(let x = 0; x < 4; x++)
         {
            let id = "a" + x;
            document.getElementById(id).value = cardAssembly[x];
         }
         for(let x = 0; x < 4; x++)
         {
            let id = "b" + x;
            document.getElementById(id).value = cardAssembly[x+4];
         }
         for(let x = 0; x < 4; x++)
         {
            let id = "c" + x;
            document.getElementById(id).value = cardAssembly[x+8];
         }
         for(let x = 0; x < 4; x++)
         {
            let id = "d" + x;
            document.getElementById(id).value = cardAssembly[x+12];
         }
    }

 var gameLogic = function() {
        var countClicks = 0;
        setTimeout(startGame,10);
        setTimeout(checkIfGameFinished,10);
        var whiteBackground = "https://kids.nationalgeographic.com/content/dam/kids/photos/games/Hub%20promos/memory.ngsversion.1438028331698.adapt.1900.1.png";
        //"https://currys-ssl.cdn.dixons.com/grafx/images/blank.gif";
        $('.card').on('click', function() {

            if(countClicks == 0)
            {
                let cardString = document.getElementById(this.id).value;
                let space = cardString.indexOf(' ');
                let end = cardString.length - 1;
                let urlString = cardString.substr(space,end);
                document.getElementById(this.id).style.backgroundImage = "url('" + urlString + "')";
                document.getElementById(this.id).style.backgroundSize = 'conatin';
                //document.getElementById(this.id).style.color = "black";
                document.getElementById(this.id).className += " clicked";
                countClicks++;
                // setTimeout(checkIfGameFinished,10);
            }
            else if(countClicks == 1)
            {
                let firstElementClicked = document.getElementsByClassName('clicked');

                if(document.getElementById(this.id) != firstElementClicked[0])
                {
                    let cardString = document.getElementById(this.id).value;
                    let space = cardString.indexOf(' ');
                    let end = cardString.length - 1;
                    let urlString = cardString.substr(space,end);
                    document.getElementById(this.id).style.backgroundImage = "url('" + urlString + "')";
                    document.getElementById(this.id).style.backgroundSize = 'conatin';
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
                   listOfClickedCards[0].style.backgroundImage = "url('" + whiteBackground + "')";
                   listOfClickedCards[1].style.backgroundImage = "url('" + whiteBackground + "')";
               }
            //    else
            //    {
            //        alert("good job they match");
            //    }
               listOfClickedCards[0].className = 'card';
               listOfClickedCards[0].className = 'card';
               countClicks = 0;
               }, 1000);
           } 
        });
}

var checkIfGameFinished = function()
{
    var listOfUrls = [];
    var counter = 0;
    for(let x = 0; x < 4; x++)
    {
        for(let i = 0; i < 4; i++)
        {
            var id;
            if(x == 0)
            {
                id = "a"+i;
            }
            else if(x == 1)
            {
                id = "b"+i;
            }
            else if(x == 2)
            {
                id = "c"+i;
            }
            else if(x == 3)
            {
                id = "d"+i;
            }
            var urlReturnVal = $(id).css('background-image');
            var urlEndVal = urlReturnVal.length - 1;
            var url = urlReturnVal.substring(4,urlEndVal);
            listOfUrls[counter] = url;
            counter++;
        }
    }
    alert(listOfUrls);
}

var startGame = function() 
{
    var backOfCard = "https://kids.nationalgeographic.com/content/dam/kids/photos/games/Hub%20promos/memory.ngsversion.1438028331698.adapt.1900.1.png";
    for(let x = 0; x < 4; x++)
    {
       let id = "a" + x;
       document.getElementById(id).style.backgroundImage = "url('" + backOfCard + "')";
    }
    for(let x = 0; x < 4; x++)
    {
       let id = "b" + x;
       document.getElementById(id).style.backgroundImage = "url('" + backOfCard + "')";
    }
    for(let x = 0; x < 4; x++)
    {
       let id = "c" + x;
       document.getElementById(id).style.backgroundImage = "url('" + backOfCard + "')";
    }
    for(let x = 0; x < 4; x++)
    {
       let id = "d" + x;
       document.getElementById(id).style.backgroundImage = "url('" + backOfCard + "')";
    }
}