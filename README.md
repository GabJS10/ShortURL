# ShortURL

ShortURL is a link shortening application that provides a REST API for shortening long URLs and generating corresponding QR codes for those short URLs.

## Features

- **URL Shortening**: Converts long URLs into short URLs that redirect to the original destination.
- **QR Code Generation**: Generates QR codes for the generated short URLs.
- **Statistics Tracking**: Tracks the number of clicks on the generated short URLs.

## Technologies Used

- Node.js
- Express.js
- Sequelize (ORM for the database)
- PostgreSQL (Database)
- QR-Image (For QR code generation)

## Installation

1. Clone this repository: `[git clone <repository URL>](https://github.com/GabJS10/ShortURL.git)`
2. Install dependencies: `npm install`
3. Configure PostgreSQL database in `src/database/database.js`
4. Run the application: `npm start`

## Usage

- **Shorten a URL**: Send a POST request to `/api/urlshort` with a JSON containing the original URL. The response will be the short URL and the corresponding QR code.
- **Redirect to a URL**: Visit the generated short URL to be redirected to the original destination.

## Example Request to Shorten a URL:

```json
{
  "id": 1,
  "urlId": "abc123",
  "urlOriginal": "https://www.example.com/long/path/to/a/resource",
  "urlShort": "http://localhost:3000/abc123",
  "clickCount": 0,
  "qrImage": "http://localhost:3000/media/abc123.png",
  "createdAt": "2024-02-16T12:00:00.000Z",
  "updatedAt": "2024-02-16T12:00:00.000Z"
}
