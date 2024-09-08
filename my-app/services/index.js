export const consumeApi = async () => {
    try {
        const response = await fetch(`${process.env.BASE_URL_SERVER}/ViewData`, {
            method: 'GET',
            cache: 'no-store'
        })

        const data = await response.json();
        return data; 
        
    } catch (error) {
        console.error(error);
    }
}