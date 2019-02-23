let xhttp = new XMLHttpRequest()

  xhttp.onreadystatechange = function(res) {
    if(this.readyState=== 4 && this.status === 200) {
      console.log('success');
    }
  }

  xhttp.open('GET', 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=KDWT1LrF4Oq8WmVMLOkUynon9MZj82yL', true);
  xhttp.send();