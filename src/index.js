// Отримати дані про фільм за допомогою OMDB API 
// Опис: Використайте публічне API OMDB для 
// отримання даних про фільм. Зробіть GET-запит за
//  адресою http://www.omdbapi.com/?apikey={API_KEY}&t={movie_title}, 
//  де {API_KEY} - ваш ключ API OMDB, а {movie_title}
//   - назва фільму. Перегляньте отримані дані щодо фільму.
const movieList = document.getElementById("movieList");
const API_KEY = "bee3de76";
const movie_title = "Harry Potter"
fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${movie_title}`)
.then((response)=> response.json())
.then((data)=> console.log(data))
.catch((error)=> console.log(error));
function caroche(data) {
    const info = `
    
    `
}