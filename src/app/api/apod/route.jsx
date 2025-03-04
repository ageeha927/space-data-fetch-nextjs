export async function GET(request) {
    try {
    // Get URL and search params
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date');
    
    // Build the API URL
    let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`;
    
    // Add date parameter if provided
    if (date) {
        apiUrl += `&date=${date}`;
    }
    
    // Fetch data from NASA API
    const response = await fetch(apiUrl);
    
    // Check if the response is ok
    if (!response.ok) {
        const errorData = await response.json();
        return new Response(
        JSON.stringify({ error: errorData.error || 'Error fetching data from NASA API' }),
        { status: response.status, headers: { 'Content-Type': 'application/json' } }
        );
    }
    
    // Parse the JSON response
    const data = await response.json();
    
    // Return the data
    return new Response(JSON.stringify(data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
    } catch (error) {
    console.error('Error in APOD API route:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
    });
    }
}