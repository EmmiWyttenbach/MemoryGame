    var randomizeCards = function()
    {
        var cardAssembly = ["cat", "cat", "dog", "dog", "fish", "fish", "frog", "frog","elephant", "elephant", "giraffe", "giraffe", "turtle", "turtle", "llama", "llama"];
        for(let i = 0; i < cardAssembly.length; i++)
         {
            var randomI = Math.floor(Math.random() * (cardAssembly.length));
            var temp = cardAssembly[i];
            cardAssembly[i] = cardAssembly[randomI];
            cardAssembly[randomI] = temp;
         }
         for(let x = 0; x < 4; x++)
         {
            document.getElementById("a" + x).value = cardAssembly[x];
         }
         for(let x = 0; x < 4; x++)
         {
            document.getElementById("b" + x).value = cardAssembly[x+4];
         }
         for(let x = 0; x < 4; x++)
         {
            document.getElementById("c" + x).value = cardAssembly[x+8];
         }
         for(let x = 0; x < 4; x++)
         {
            document.getElementById("d" + x).value = cardAssembly[x+12];
         }
        console.log(cardAssembly);
    }
/*
    var compareCardValue = function ()
    {
        $("button").click(function() {
            console.log("yayyyyyyy");
          //  document.getElementById(this.id).style.color = black;
        });
    }
*/