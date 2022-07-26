console.log('masuk');
const url = 'https://api.adviceslip.com/advice';

// async function getApi(url){
//     const response = await fetch(url);

//     let data = await response.json();
//     console.log(data);
//     if(response){
//         showData(data);
//     }
// }

function getApi(url) {
    fetch(url)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
      console.log(data);
      let advices = data;
      advices.map(function(advice){
        document.querySelector('.advice-id').innerHTML = `${advice.id}`;
        document.querySelector('.col p').innerHTML = `${advice.advice}`;
      });
    //   data.forEach(function(advice){
    //     let id = `${advice.id}`;
    //     let advice = `${advice.advice}`
    //   });
    //   document.querySelector('.advice-id').textContent(id);
    //     document.querySelector('.col p').textContent(advice);
    })
    .catch(err => console.log(err));
  }

getApi(url);

// function showData(data){
//     data.forEach(function(advice){
//         document.querySelector('.advice-id').textContent(advice.id);
//     });
    
// }