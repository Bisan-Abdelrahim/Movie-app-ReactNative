export const TMDB_CONFIG = {
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  BASE_URL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  }
  
};

export const fetchMovies = async ({query}: {query: string}) => {
    const endpoint=  query?
     `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}` :
    `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

    const response = await fetch(endpoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers,
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch movies: ${response.statusText}`);
    }
    const data = await response.json();
    return data.results;

        
    }

   

// const url = 'https://api.themoviedb.org/3/discover/movie';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTUzMjdjMmI1OTNhZmQ0YjUzMDY1NjU1YzE2ZDBhYyIsIm5iZiI6MTc3MjMxNTExOS4yNDgsInN1YiI6IjY5YTM2MWVmNjg2NzY2OGNmMGE3OWE4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.puzMFxWLrrN-zkcSFFe2PeNe5UhA4uxXYZiCZwoh8hU'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));