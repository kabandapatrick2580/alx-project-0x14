# alx-project-0x14

## API Overview
The MoviesDatabase API provides an extensive collection of movie-related data, including movie details, actors, directors, genres, ratings, and more. It is designed for developers to integrate movie information into their applications seamlessly. The API supports features like searching for movies, retrieving detailed movie data, and accessing trending or top-rated content.

### KEY FEATURES
- **Get Movies:** Fetch a list of movies based on title, genre, or release year.
- **User Favorites:** Allow users to add movies to their favorites list.
- **Actor Information:** Retrieve details about actors, including their filmography.
- **Genre Listing:** Access a list of available movie genres.
- **Detailed Movie Data:** Get comprehensive information about a specific movie.


## Version
The current version of the MoviesDatabase API is v1.0.

## Available Endpoints
1. **GET /movies**
   - Description: Fetches a list of movies based on query parameters like title, genre, or release year.

2. **GET /movies/{id}**
   - Description: Retrieves detailed information about a specific movie by its ID.

3. **GET /actors**
   - Description: Returns a list of actors and their basic details.

4. **GET /genres**
   - Description: Lists all available genres.

5. **POST /favorites**
   - Description: Allows users to add a movie to their favorites list (requires authentication).

## Request and Response Format
### Request Format
Requests are typically made using HTTP methods like GET, POST, or DELETE. Query parameters or JSON bodies are used to pass data.

#### Example GET Request (Fetching movies):
```
GET https://api.moviesdatabase.com/movies?title=Inception&year=2010
```
Headers:
```
Authorization: Bearer <API_KEY>
Content-Type: application/json
```

#### Example POST Request (Adding a favorite movie):
```
POST https://api.moviesdatabase.com/favorites
```
Body:
```json
{
  "movie_id": "12345"
}
```

### Response Format
Responses are provided in JSON format.

#### Example Response (Movie details):
```json
{
  "id": "12345",
  "title": "Inception",
  "genre": ["Action", "Sci-Fi"],
  "release_year": 2010,
  "rating": 8.8
}
```

## Authentication
Authentication is required for accessing most endpoints. The API uses an API key-based system.

- Generate your API key by creating an account on the MoviesDatabase platform.
- Include the key in the `Authorization` header of your requests as:
```
Authorization: Bearer <API_KEY>
```
- Ensure your API key is kept secure and not exposed in client-side code.

## Error Handling
The MoviesDatabase API uses standard HTTP status codes to indicate the success or failure of a request.

#### Common Errors:
1. **400 Bad Request**
   - Cause: Invalid or missing parameters.
   - Resolution: Verify the required parameters in your request.

2. **401 Unauthorized**
   - Cause: Missing or invalid API key.
   - Resolution: Include a valid API key in the `Authorization` header.

3. **404 Not Found**
   - Cause: The requested resource does not exist.
   - Resolution: Verify the endpoint URL and resource ID.

4. **429 Too Many Requests**
   - Cause: Exceeding the rate limit.
   - Resolution: Respect the API's rate limits; implement exponential backoff.

## Usage Limits and Best Practices
1. **Rate Limits:**
   - The API enforces a rate limit of 100 requests per minute per API key.
   - Exceeding this limit will result in a `429 Too Many Requests` error.

2. **Best Practices:**
   - Cache frequent requests to minimize API usage.
   - Always validate API responses before processing.
   - Use paginated requests for endpoints that return large datasets.

By following these guidelines, you can effectively utilize the MoviesDatabase API in your projects while adhering to its usage policies.

