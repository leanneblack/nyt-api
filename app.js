document.getElementById('fetch-btn').addEventListener('click', function () {
  // collect data
  let cardResult = document.getElementById('card-result');
  // let searchTerm = document.getElementById('search-term').value;
  let searchTerm = 'new green deal';
  // let searchNum = document.getElementById('search-num');
  let searchNum = 8;
  // let searchStart = document.getElementById('start-year');
  let searchStart = 2010;
  // let searchEnd = document.getElementById('end-year');
  let searchEnd = 2015;
  let xhttp = new XMLHttpRequest()

  xhttp.onreadystatechange = function (res) {
    if (this.readyState === 4 && this.status === 200) {
      console.log('success');
      // access the data here
      let results = JSON.parse(this.response);


      for (let i = 0; i < searchNum; i++) {
        let h3 = document.createElement('h3');
        let a = document.createElement('a');
        let p = document.createElement('p');
        if (results.response.docs[i] !== undefined) {
          let headline = results.response.docs[i].headline.main;
          a.innerHTML = headline;
          a.setAttribute('href', results.response.docs[i].web_url);
          p.textContent = results.response.docs[i].byline.original;
          h3.appendChild(a);
          console.log('click')
        }


      }
    }
  }

  xhttp.open('GET', `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=KDWT1LrF4Oq8WmVMLOkUynon9MZj82yL&page=0&fq=pub_date:("${searchStart}" "${searchEnd}")`, true);
  xhttp.send();

});

document.getElementById('reset-btn').addEventListener('click', function () {

  cardResult.innerHTML = '';

});