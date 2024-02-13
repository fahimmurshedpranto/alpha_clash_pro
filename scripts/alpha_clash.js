// function play()
// {
//     //step-1: hide the home screen. to hide the screen to add the class hidden to the home screen
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList);

//     //show the play ground
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden')
//     // console.log(playGroundSection.classList);
// }

function continueGame()
{
  //step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();


    //set randomly generated alphabet to the screen(show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set background color
    setBackgroundColorById(alphabet);

}

function play()
{
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}
