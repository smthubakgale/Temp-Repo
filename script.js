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

        console.log(testResponse.text());
        const testData = await testResponse.json();

        // Display the result
        resultDiv.innerText = JSON.stringify(testData, null, 2);
    } catch (error) {
        resultDiv.innerText = `Error: ${error.message}`;
    }
});
