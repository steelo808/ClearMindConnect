console.log("working");

// const $apiUrl = "https://newsapi.org/v2/everything";

// const $params = {
//     q: 'alzheimers',
//     from:"2024-02-10",
//     sortBy:"popularity",
//     apiKey:"c05688524a534b2786c1f41c1f2d7fa5",
//     PageSize: 3
// }

// const $queryString = new URLSearchParams($params).toString();

// $.get(`${$apiUrl}?${$queryString}`, (data) =>{
//     console.log(data)
//     })

// for(let i = 0; i < data.length; i++){
//     const $news = data.articles;
//     const $newsCard = $(".news-card");
//     const $content = $(".content");
//     // const $img = $(`<img src=`)

// }

// $.ajax({
//     url:"https://newsapi.org/v2/everything",
//     method: 'GET',
//     data: {
//         q: 'alzheimers',
//         from:"2024-02-10",
//         sortBy:"popularity",
//         apiKey:"c05688524a534b2786c1f41c1f2d7fa5",
//         PageSize: 3
//     },
//     success: function(data){
//         console.log(data)
//     },
//     error: function(xhr, status, error) {
//         console.error(error)
//     }

// })

fetch(
  "https://newsapi.org/v2/everything?q=alzheimers&from=2024-03-01&sortBy=popularity&apiKey=c05688524a534b2786c1f41c1f2d7fa5&PageSize=3"
)
  .then((res) => {
    if (!res.ok) {
      throw new Error("could not fetch data");
    }
    return res.json();
  })
  .then((data) => {



    const articles = data.articles;
    
    for(let i = 0; i < articles.length; i++){
      console.log(articles);
     //Creating the UI
    const newsCard = document.createElement("div");
      const img = document.createElement('img');
    const content = document.createElement('div');
      const date = document.createElement("h5");
      const headliner = document.createElement('h2');
      const info = document.createElement('p');
      const btn = document.createElement('button');

      // setting classes
      newsCard.classList.add('new-card');
      content.classList.add('content');
      btn.classList.add('btn');
    
      

      // TESTING
      console.log(articles[i].urlToImage);
      console.log(articles[i].author);
      console.log(articles[i].description);
      console.log(articles[i].title);
      console.log(articles[i].content);
      console.log(articles[i].publishedAt);

      // APPENDING
      newsCard.append(img,content);
      content.append(date, headliner, info, btn)

    }
  })
  .catch((error) => {
    console.error(error);
  });


