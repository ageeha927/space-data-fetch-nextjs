export async function GET(request) {
    try {

    const { searchParams } = new URL(request.url)
    const date = searchParams.get('date')
    
    let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`
    
    if (date) {
        apiUrl += `&date=${date}`
    }
    
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
        const errorData = await response.json();
        return new Response(
        JSON.stringify({ error: errorData.error || 'Error fetching data from NASA API' }),
        { status: response.status, headers: { 'Content-Type': 'application/json' } }
        )
    }
    
    const data = await response.json();
    
    return new Response(JSON.stringify(data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    })
    } catch (error) {
    console.error('Error in APOD API route:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
    })
    }
}