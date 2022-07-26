console.log('masuk');

// async function getApi(url){
//     const response = await fetch(url);

//     let data = await response.json();
//     console.log(data);
//     if(response){
//         showData(data);
//     }
// }

function getApi(e) {
    
    fetch('https://api.adviceslip.com/advice')
    .then((res) => {
        return res.json()
    })
    .then((data) => {
      console.log(data);
      var advices = Object.keys(data).map(function(key){
        
        return data[key];
      });
      console.log(advices);
      console.log(typeof(advices));
      console.log(advices[0].id);
      console.log(advices[0].advice);
      document.querySelector('.advice-id').innerHTML = `#${advices[0].id}`;
      document.querySelector('.col p').innerHTML = `${advices[0].advice}`;
    //   let advices = JSON.stringify(data);
    //   for(let key in advices){
    //     console.log(`obj.${key} = ${advices[key]}`);
    //   }
    
    //   data.forEach(function(advice){
    //     let id = `${advice.id}`;
    //     let advice = `${advice.advice}`
    //   });
    //   document.querySelector('.advice-id').textContent(id);
    //     document.querySelector('.col p').textContent(advice);
    })
    .catch(err => console.log(err));
    e.preventDefault();
  }

getApi();

