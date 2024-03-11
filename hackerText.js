const text = "Full-stack web-developer focused on simplicity and purpose, Turning idea into a real life Products is my calling....";
let index = 0;

function hackerText ()
{            
    document.getElementById('text').textContent +=text[index++];
    if(index < text.length){
        setTimeout(hackerText, 100);
    }
}
hackerText ();

      