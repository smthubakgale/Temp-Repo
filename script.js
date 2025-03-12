document.addEventListener('DOMContentLoaded', async () => {
    const resultDiv = document.getElementById('result');
    try {
        // Fetch the JSON file
        const response = await fetch('https://raw.githubusercontent.com/smthubakgale/ChinaCentre/refs/heads/main/api-config.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();

        // Extract the URL from the JSON data
        const url = jsonData.url;

        console.log(url);

        // Create an iframe and set the URL
        const iframe = document.createElement('iframe');
        iframe.src = url;
        iframe.frameBorder = '0';
        iframe.width = '100%';
        iframe.height = '100%';
        document.body.appendChild(iframe);

    } catch (error) {
        resultDiv.innerText = `Error: ${error.message}`;
    }
});
