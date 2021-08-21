/*create a fun input response for the random form*/
const randomForm = document.querySelector("#randomForm");
const formButton = document.querySelector("#submit");
const bitMeTalkBox = document.querySelector("#bitMeTalkBox")
const bitInputBox = document.querySelector("#ugly1")





   
   // code for form submison : 





formButton.addEventListener("click",function(e){

   if(bitInputBox.value === "hello"){

      bitMeTalkBox.innerHTML="hi";
      bitInputBox.value="";
      
   }else{

      bitMeTalkBox.innerHTML="???";
      bitInputBox.value="";
   }
      e.preventDefault();

      setTimeout(function(){bitMeTalkBox.innerHTML=""; }, 3000);
});


//instructions to make button set value of select option to "happy". 

function setHappy () {


document.querySelector(".choose" ).value = "happy"; 

};

//making a random quote thing




let quotes = [

`"The Best Way To Get Started Is To Quit Talking And Begin Doing." Walt Disney `,

`"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty." Winston Churchill`,

`"Dont Let Yesterday Take Up Too Much Of Today." Will Rogers`,

`"You Learn More From Failure Than From Success. Dont Let It Stop You. Failure Builds Character."`,

`"Its Not Whether You Get Knocked Down, its Whether You Get Up." Vince Lombardi`,

`"If You Are Working On Something That You Really Care About, You Dont Have To Be Pushed. The Vision Pulls You." Steve Jobs`,

`"People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do." Rob Siltanen`,

`"Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough." Og Mandino`,

`"We May Encounter Many Defeats But We Must Not Be Defeated." Maya Angelou`,

`"Creativity Is Intelligence Having Fun." Albert Einstein`,

`"Death is not the greatest loss in life. The greatest loss is what dies inside while still alive. Never surrender.\"
 Tupac Shakur `,

`"Reality is wrong. Dreams are for the real."Tupac Shakur`,

 `"If you can make it through the night, theres a brighter day." 
 Tupac Shakur`,

 `"I’m not a follower. I’m a leader. And anyone who speaks their mind is always criticized." Tyler, the Creator` ,

 `"I think people get caught up in having an identity." Tyler, The Creator` ,



];


function newQuote(){


let randomNumber = Math.floor(Math.random()*(quotes.length));


document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];



};






