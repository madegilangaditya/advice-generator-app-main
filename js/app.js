function getApi() {
    
    fetch('https://api.adviceslip.com/advice')
    .then((res) => {
        return res.json()
    })
    .then((data) => {
      var advices = Object.keys(data).map(function(key){
        
        return data[key];
      });
      
      document.querySelector('.advice-id').innerHTML = `#${advices[0].id}`;
      document.querySelector('.col p').innerHTML = `"${advices[0].advice}"`;
    
    })
    .catch(err => console.log(err));
    
  }

getApi();

document.querySelector('.btn').addEventListener('click', (e)=>{
  e.preventDefault();
  getApi();
});

