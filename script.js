document.getElementById('advice').addEventListener('click',advice);
function advice(){
  const displayAdvice = document.getElementById('displayAdvice');
  displayAdvice.innerHTML = `Loading...`;
  fetch('https://api.adviceslip.com/advice').then((response) => {
    if(!response.ok){
      throw new error('Network response was not ok');     
    }
    return response.json();
  }).then(data => {
    displayAdvice.innerHTML = `${data.slip.advice}`;
  }).catch(error => {
    displayAdvice.innerHTML = `Failed to load. Try again!`;
    console.log(error);   
  })
};