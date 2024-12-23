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
