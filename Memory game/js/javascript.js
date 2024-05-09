alert('hello Welcome to the memory game 👋🤚🖐🤝');
const emojis = ["🎃","🎃","👽","👽","💣","💣","💎","💎","🤑","🤑","☠️","☠️","💡","💡","🤠","🤠"];
var shuffEmojis = emojis.sort(() =>(Math.random() > .5) ? 2 : -1);
for (var i = 0; i < emojis.length; i++) {
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = shuffEmojis[i];
    box.onclick = function () {
        this.classList.add('boxOpen');
        setTimeout(function(){
            if(document.querySelectorAll('.boxOpen').length > 1) {
                if (document.querySelectorAll('.boxOpen')[0].innerHTML == 
                document.querySelectorAll('.boxOpen')[1].innerHTML) {
                document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch');
                document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch');
                document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');
                if(document.querySelectorAll('.boxMatch').length == emojis.length) {
                    alert('شما برنده شدید 🎉🎊🎇🥳');
                    alert('Thank you very much for using the game 😀😃😄🙏');
                }
            }else{
                document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');
            }
        }
        },800)
    }
    document.querySelector('.game').appendChild(box);
}