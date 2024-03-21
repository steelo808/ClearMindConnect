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
    const gridContainer = document.querySelector('.grid-container');

    for(let i = 0; i < articles.length; i++){
        const newsCard = document.createElement("div");
        newsCard.classList.add('news-card')

          const img = document.createElement("img")
          img.src = articles[i].urlToImage;
          img.classList.add('news-img')

          const date = document.createElement("h4");
          date.textContent = new Date(articles[i].publishedAt).toLocaleDateString('en-US');
          date.classList.add('news-date');


          const headliner = document.createElement("h3");
          headliner.textContent = articles[i].title;
          headliner.classList.add('news-headliner')

          const content = document.createElement("p");
          content.textContent = articles[i].content;
          content.classList.add('news-content')

          const btn = document.createElement("button");
          btn.textContent = "Read More";


      gridContainer.appendChild(newsCard);
      newsCard.append(img, date, headliner, content, btn)
    

      // TESTING
      console.log(articles[i].urlToImage);
      // console.log(articles[i].author);
      console.log(articles[i].description);
      console.log(articles[i].title);
      console.log(articles[i].content);
      console.log(articles[i].publishedAt);

    }
  })
  .catch((error) => {
    console.error(error);
  });


