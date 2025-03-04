# NASA APOD API Next.js

A Next.js application that displays NASA's Astronomy Picture of the Day (APOD) using the official NASA API.

## Features
- View the current Astronomy Picture of the Day
- Browse APODs by selecting a specific date
- Support for both image and video content
- Responsive design that works on desktop and mobile
- Client-side data fetching with SWR

## Prerequisites
Before you begin, ensure you have:
- Node.js 16.x or later
- npm
- A NASA API key ([api.nasa.gov](https://api.nasa.gov))

## Installation

### Clone the repository
```bash
git clone https://github.com/ageeha927/nasa-apod-viewer.git
cd nasa-apod-viewer
```

### Install dependencies
```bash
npm install
```

### Set up environment variables
Create a `.env` file in the root directory:
```ini
NASA_API_KEY=your_nasa_api_key_here
```

### Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## API Route
The application uses a Next.js API route.
```
/api/apod?date=YYYY-MM-DD
```
The `date` parameter is optional. If its empty the current day's APOD will be fetched.

## Technologies Used
- **Next.js** - React framework with App Router
- **SWR** - React Hooks for data fetching
- **NASA APOD API** - Astronomy Picture of the Day API

## Data Fetching Strategy
This project uses SWR for client-side data fetching, which provides:
- Automatic caching
- Revalidation on focus
- Error handling
- Loading states
- Conditional fetching

## License
This project is open source and available under the MIT License.