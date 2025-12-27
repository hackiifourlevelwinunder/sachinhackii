let finalNumber = 0; // Placeholder for final number from server

// Function to fetch server trend data
async function getTrendFromServer() {
    const response = await fetch('/api/trend');
    const data = await response.json();
    return data.number;
}

// Function to update the number on the clock
function updateNumberOnClock() {
    const randomNumberElement = document.getElementById('randomNumber');
    randomNumberElement.textContent = finalNumber;
}

// Show the final number 40 seconds before the end of the round
async function showPreFinalNumber() {
    setInterval(async () => {
        await updateServerNumber();  // Get and display the server's number
        setTimeout(() => updateNumberOnClock(), 40000);  // Show it 40s before
    }, 60000);  // Update every minute
}

// Function to update number from server
async function updateServerNumber() {
    finalNumber = await getTrendFromServer();
    updateNumberOnClock();
}

showPreFinalNumber();  // Initialize