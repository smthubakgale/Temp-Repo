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

        // Make another fetch request using the extracted URL
        const testResponse = await fetch(`${url}/test`);
        if (!testResponse.ok) {
            throw new Error(`HTTP error! status: ${testResponse.status}`);
        }
        
         fetch(`${url}/test`, {
          headers: {
            'ngrok-skip-browser-warning': 'true'
          }
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));

        const testData = await testResponse.text();

        // Display the result
        resultDiv.innerText = JSON.stringify(testData, null, 2);
    } catch (error) {
        resultDiv.innerText = `Error: ${error.message}`;
    }
});
