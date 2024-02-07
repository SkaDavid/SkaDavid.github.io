const h1 = document.querySelector('h1');
const yes = document.getElementById('yes');
const no = document.getElementById('no');
const image = document.getElementById('image');
const buttons = document.getElementById('buttons');

noCounter = 0;
previousWidth = 800;
previousHeight = 800;

function success(){
    buttons.style.display = 'none';
    h1.innerText = 'Yaaaaaaaaaaaaay';
    image.src = './images/il_570xN.3324023994_dcbf.avif';
    image.classList.add('animation');
}


yes.addEventListener('click', success);

no.addEventListener('click', ()=>{
    h1.innerText = 'Will you be my valentine?!  >:(';
    image.src = './images/funny-angry-cat-face-with-a-pink-heart-nose-vector-42072281.jpg';
    no.addEventListener('mouseover', ()=>{
        noCounter += 1;
        if(noCounter >= 15){
            no.style.display = 'none';

            newYes = document.createElement('button');
            newYes.classList.add('yes');
            newYes.addEventListener('click', success);
            newYes.innerText = 'yes';
            buttons.appendChild(newYes);

            image.src = './images/pty011.jpg';
            h1.innerText = 'Will you be my Valentine?<33'
            return;

        }
        no.style.position = 'absolute';

        randomWidth = Math.floor(window.innerWidth * Math.random());
        if(randomWidth - previousWidth > 100 || randomWidth - previousWidth < -100){
            randomWidth = Math.floor(window.innerWidth * Math.random());
        }
        else previousWidth = randomWidth;

        randomHeight = Math.floor(window.innerHeight * Math.random());
        if(randomHeight - previousHeight > 100 || randomHeight - previousHeight < -100){
            randomHeight = Math.floor(window.innerHeight * Math.random());
        }
        else previousHeight = randomHeight;

        no.setAttribute('style', `position: fixed; top: ${randomHeight}px; left: ${randomWidth}px;`);
    })
})