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

var $url = 'https://newsapi.org/v2/everything?' +
          'q=alzheimers&' +
          'from=2024-02-14&' +
          'sortBy=popularity&' +
          'PageSize=3&' +
          'apiKey=c05688524a534b2786c1f41c1f2d7fa5';

const $req = new Request($url);

fetch($req)
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        console.log(data)
    })
    .catch(function(error) {
        console.error(error)
    })


const $createUi = (data) =>{
    const $newsCard = $(".news-card");

   data.articles[0].forEach(article =>{
    const $img = $(`<img src="${data[i].articles[0].urlToImage}" alt="news image">`)
    $newsCard.append($img);
   })
}


$createUi();