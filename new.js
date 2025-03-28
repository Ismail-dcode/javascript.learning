// This JavaScript program demonstrates a large application with multiple features.








// This JavaScript program demonstrates a large application with multiple features.

// User Management Module
const users = [];

function addUser(username, password) {
    users.push({ username, password });
    console.log(`${username} added successfully.`);
}

function authenticateUser(username, password) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        console.log(`${username} authenticated successfully.`);
        return true;
    } else {
        console.log(`Authentication failed for ${username}.`);
        return false;
    }
}

// Task Management Module
const tasks = [];

function addTask(title, description, assignedTo) {
    tasks.push({ title, description, assignedTo, completed: false });
    console.log(`Task "${title}" added successfully.`);
}

function markTaskCompleted(title) {
    const task = tasks.find(t => t.title === title);
    if (task) {
        task.completed = true;
        console.log(`Task "${title}" marked as completed.`);
    } else {
        console.log(`Task "${title}" not found.`);
    }
}

function listTasks() {
    console.log("Tasks:");
    tasks.forEach(task => {
        console.log(`- ${task.title} (Assigned to: ${task.assignedTo}, Completed: ${task.completed})`);
    });
}

// Notification Module
function notifyUser(username, message) {
    console.log(`Notification for ${username}: ${message}`);
}

// Main Application Flow
console.log("=== Application Start ===");

// Adding users
addUser("Alice", "password123");
addUser("Bob", "qwerty");

// Authenticating users
authenticateUser("Alice", "password123");
authenticateUser("Bob", "wrongpassword");

// Adding and managing tasks
addTask("Fix bug #42", "Resolve the issue causing a crash.", "Alice");
addTask("Prepare report", "Compile the quarterly financial report.", "Bob");

listTasks();

markTaskCompleted("Fix bug #42");
listTasks();

// Notifications
notifyUser("Alice", "You have a new task assigned.");
notifyUser("Bob", "Your task deadline is approaching.");

console.log("=== Application End ===");






let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i);
    });
};

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[parseInt(voiceSelect.value)];
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});





//api.openweathermap.org/data/2.5/weather?q=mumbai&appid=a5592017ab1a27f5f6b7eb27d2e6c53b&units=metric

// --------------------------------------------------------------------------------------------------------------------------
// weather API project 


const apiKey = "a5592017ab1a27f5f6b7eb27d2e6c53b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search-container input");
const searchBtn = document.querySelector(".search-container button");
const weatherIcon = document.querySelector(".weather_icon");
const weatherContent = document.querySelector(".weather-content");

async function checkWeather(city) {
    try {
        // Show loading state
        weatherContent.style.opacity = "0.5";
        
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        
        if(response.status == 404) {
            document.querySelector(".error-type").style.display = "block";
            weatherContent.style.display = "none";
        } else {
            const data = await response.json();
            
            // Update weather information
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

            updateWeatherIcon(data.weather[0].main);
            
            document.querySelector(".error-type").style.display = "none";
            weatherContent.style.display = "block";
           
            
       
            updateLastUpdateTime();
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.querySelector(".error").style.display = "block";
    } finally {
   
        weatherContent.style.opacity = "1";
    }
}

function updateWeatherIcon(weatherMain) {
    const iconMap = {
        'Clouds': 'clouds.png',
        'Clear': 'clear.png',
        'Rain': 'rain.png',
        'Drizzle': 'drizzle.png',
        'Mist': 'mist.png',
        'Snow': 'snow.png',
        'Thunderstorm': 'thunderstorm.png'
    };
    weatherIcon.src = iconMap[weatherMain] || 'unknown.png';
}

function updateLastUpdateTime() {
    const lastUpdate = document.getElementById('lastUpdate');
    const now = new Date();
    lastUpdate.textContent = now.toLocaleTimeString();
}

// Event Listeners
searchBox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        checkWeather(searchBox.value);
    }
});

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

// Update date and time
function updateDateTime() {
    const now = new Date();
    
    // Update time
    const timeDisplay = document.getElementById('timeDisplay');
    timeDisplay.textContent = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
    
    // Update date
    const dateDisplay = document.getElementById('dateDisplay');
    dateDisplay.textContent = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    // Update timezone
    const timezoneDisplay = document.getElementById('timezoneDisplay');
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    timezoneDisplay.textContent = timezone.replace('_', ' ');
}

// Initialize
setInterval(updateDateTime, 1000);
updateDateTime();
updateLastUpdateTime();


var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";

}
function closemenu() {
    sidemenu.style.right = "-200px";

}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzEDwOQHI0-l9yLrefuSVl7VpskI-3XnQRR11T9ryoUTGrwuARKzeobpxFT6gNAxzW0ew/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent succefully"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))

    })


// --------------------------------------------------------------------------------------------------------------------
// AI IMAGE generation final draft 

// Get DOM elements
const generateBtn = document.getElementById("generate");
const modelSelect = document.getElementById("model-select");
const imageCountInput = document.getElementById("image-count");
const userPrompt = document.getElementById("user-prompt");
const loading = document.getElementById("loading");
const imageGrid = document.getElementById("image-grid");
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference or default to light theme
const savedTheme = localStorage.getItem('theme') || 'light';
document.body.className = `${savedTheme}-theme`;
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const isLight = document.body.classList.contains('light-theme');
    const newTheme = isLight ? 'dark' : 'light';
    
    document.body.className = `${newTheme}-theme`;
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    if (theme === 'light') {
        themeIcon.className = 'fa-solid fa-moon';
    } else {
        themeIcon.className = 'fa-solid fa-sun';
    }
}

// Function to generate images
async function generateImages(input) {
    const selectedModel = modelSelect.value;
    const imageCount = parseInt(imageCountInput.value);
    
    if (!input) {
        alert("Please enter a prompt!");
        return;
    }

    disableGenerateButton();
    clearImageGrid();
    loading.style.display = "flex";

    try {
        const imagePromises = [];
        
        for (let i = 0; i < imageCount; i++) {
            const randomNumber = getRandomNumber(1, 10000);
            const prompt = `${input} ${randomNumber}`;
            
            const promise = fetch(
                `https://api-inference.huggingface.co/models/${selectedModel}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${apiKey}`,
                    },
                    body: JSON.stringify({ inputs: prompt }),
                }
            );
            imagePromises.push(promise);
        }

        const responses = await Promise.all(imagePromises);
        
        for (let i = 0; i < responses.length; i++) {
            if (!responses[i].ok) {
                throw new Error(`Failed to generate image ${i + 1}`);
            }
            
            const blob = await responses[i].blob();
            const imgUrl = URL.createObjectURL(blob);
            
            // Create wrapper div
            const wrapper = document.createElement("div");
            wrapper.className = "image-wrapper";
            
            // Create and add image
            const img = document.createElement("img");
            img.src = imgUrl;
            img.alt = `Generated image ${i + 1}`;
            wrapper.appendChild(img);
            
            // Create and add download button
            const downloadBtn = document.createElement("button");
            downloadBtn.className = "download-btn";
            downloadBtn.innerHTML = '<i class="fa-solid fa-download"></i> Download';
            downloadBtn.onclick = (e) => {
                e.stopPropagation();
                downloadImage(imgUrl, i);
            };
            wrapper.appendChild(downloadBtn);
            
            imageGrid.appendChild(wrapper);
        }
    } catch (error) {
        alert(`Error: ${error.message}`);
    } finally {
        loading.style.display = "none";
        enableGenerateButton();
    }
}

// Event listeners
generateBtn.addEventListener('click', () => {
    generateImages(userPrompt.value);
});

userPrompt.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
        generateImages(userPrompt.value);
    }
});

// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to disable the generate button during processing
function disableGenerateButton() {
    generateBtn.disabled = true;
}

// Function to enable the generate button after process
function enableGenerateButton() {
    generateBtn.disabled = false;
}

// Function to clear image grid
function clearImageGrid() {
    imageGrid.innerHTML = "";
}

function downloadImage(imgUrl, imageNumber) {
    const link = document.createElement("a");
    link.href = imgUrl;
    link.download = `image-${imageNumber + 1}.jpg`;
    link.click();
}




// Get DOM elements
const generateBtn = document.getElementById("generate");
const modelSelect = document.getElementById("model-select");
const imageCountInput = document.getElementById("image-count");
const userPrompt = document.getElementById("user-prompt");
const loading = document.getElementById("loading");
const imageGrid = document.getElementById("image-grid");
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference or default to light theme
const savedTheme = localStorage.getItem('theme') || 'light';
document.body.className = `${savedTheme}-theme`;
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const isLight = document.body.classList.contains('light-theme');
    const newTheme = isLight ? 'dark' : 'light';
    
    document.body.className = `${newTheme}-theme`;
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    if (theme === 'light') {
        themeIcon.className = 'fa-solid fa-moon';
    } else {
        themeIcon.className = 'fa-solid fa-sun';
    }
}

// Function to generate images
async function generateImages(input) {
    const selectedModel = modelSelect.value;
    const imageCount = parseInt(imageCountInput.value);
    
    if (!input) {
        alert("Please enter a prompt!");
        return;
    }

    disableGenerateButton();
    clearImageGrid();
    loading.style.display = "flex";

    try {
        const imagePromises = [];
        
        for (let i = 0; i < imageCount; i++) {
            const randomNumber = getRandomNumber(1, 10000);
            const prompt = `${input} ${randomNumber}`;
            
            const promise = fetch(
                `https://api-inference.huggingface.co/models/${selectedModel}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${apiKey}`,
                    },
                    body: JSON.stringify({ inputs: prompt }),
                }
            );
            imagePromises.push(promise);
        }

        const responses = await Promise.all(imagePromises);
        
        for (let i = 0; i < responses.length; i++) {
            if (!responses[i].ok) {
                throw new Error(`Failed to generate image ${i + 1}`);
            }
            
            const blob = await responses[i].blob();
            const imgUrl = URL.createObjectURL(blob);
            
            // Create wrapper div
            const wrapper = document.createElement("div");
            wrapper.className = "image-wrapper";
            
            // Create and add image
            const img = document.createElement("img");
            img.src = imgUrl;
            img.alt = `Generated image ${i + 1}`;
            wrapper.appendChild(img);
            
            // Create and add download button
            const downloadBtn = document.createElement("button");
            downloadBtn.className = "download-btn";
            downloadBtn.innerHTML = '<i class="fa-solid fa-download"></i> Download';
            downloadBtn.onclick = (e) => {
                e.stopPropagation();
                downloadImage(imgUrl, i);
            };
            wrapper.appendChild(downloadBtn);
            
            imageGrid.appendChild(wrapper);
        }
    } catch (error) {
        alert(`Error: ${error.message}`);
    } finally {
        loading.style.display = "none";
        enableGenerateButton();
    }
}

// Event listeners
generateBtn.addEventListener('click', () => {
    generateImages(userPrompt.value);
});

userPrompt.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
        generateImages(userPrompt.value);
    }
});

// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to disable the generate button during processing
function disableGenerateButton() {
    generateBtn.disabled = true;
}

// Function to enable the generate button after process
function enableGenerateButton() {
    generateBtn.disabled = false;
}

// Function to clear image grid
function clearImageGrid() {
    imageGrid.innerHTML = "";
}

function downloadImage(imgUrl, imageNumber) {
    const link = document.createElement("a");
    link.href = imgUrl;
    link.download = `image-${imageNumber + 1}.jpg`;
    link.click();
}

// AI image UI first draft 
// ---------------------------------------------------------------------------------------------------------------------

const themeToggle = document.querySelector(".theme-toggle");
const promptInput = document.querySelector(".prompt-input");
const promptBtn = document.querySelector(".prompt-btn");
const promptForm = document.querySelector(".prompt-form");
const modelSelect = document.querySelector("#model-select");
const countSelect = document.querySelector("#count-select");
const ratioSelect = document.querySelector("#ratio-select");
const gridGallery = document.querySelector(".gallery-grid");

const examplePrompts = [
    "A magic forest with glowing plants and fairy homes among giant mushrooms",
    "An old steampunk airship floating through golden clouds at sunset",
    "A future Mars colony with glass domes and gardens against red mountains",
    "A dragon sleeping on gold coins in a crystal cave",
    "An underwater kingdom with merpeople and glowing coral buildings",
    "A floating island with waterfalls pouring into clouds below",
    "A witch's cottage in fall with magic herbs in the garden",
    "A robot painting in a sunny studio with art supplies around it",
    "A magical library with floating glowing books and spiral staircases",
    "A Japanese shrine during cherry blossom season with lanterns and misty mountains",
    "A cosmic beach with glowing sand and an aurora in the night sky",
    "A medieval marketplace with colorful tents and street performers",
    "A cyberpunk city with neon signs and flying cars at night",
    "A peaceful bamboo forest with a hidden ancient temple",
    "A giant turtle carrying a village on its back in the ocean",
];

// Initialize theme
(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDarkTheme = savedTheme === "dark" || (!savedTheme && systemPrefersDark);

    document.body.classList.toggle("dark-theme", isDarkTheme);
    themeToggle.querySelector("i").className = isDarkTheme ? "fa-solid fa-sun" : "fa-solid fa-moon";
})();

// Theme toggle event
themeToggle.addEventListener("click", () => {
    const isDarkTheme = document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
    themeToggle.querySelector("i").className = isDarkTheme ? "fa-solid fa-sun" : "fa-solid fa-moon";
});

// Generate random prompt
promptBtn.addEventListener("click", () => {
    promptInput.value = examplePrompts[Math.floor(Math.random() * examplePrompts.length)];
    promptInput.focus();
});












