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
    const newsCard = document.querySelector(".news-card");

    data.forEach(item =>{
      
    })
  })
  .catch((error) => {
    console.error(error);
  });
