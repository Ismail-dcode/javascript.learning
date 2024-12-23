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

// Project Management Module
const projects = [];

function addProject(projectName, description) {
    projects.push({ projectName, description, tasks: [] });
    console.log(`Project "${projectName}" added successfully.`);
}

function addTaskToProject(projectName, taskTitle, taskDescription, assignedTo) {
    const project = projects.find(p => p.projectName === projectName);
    if (project) {
        project.tasks.push({ title: taskTitle, description: taskDescription, assignedTo, completed: false });
        console.log(`Task "${taskTitle}" added to project "${projectName}".`);
    } else {
        console.log(`Project "${projectName}" not found.`);
    }
}

function listProjects() {
    console.log("Projects:");
    projects.forEach(project => {
        console.log(`- ${project.projectName}: ${project.description}`);
        project.tasks.forEach(task => {
            console.log(`  - Task: ${task.title} (Assigned to: ${task.assignedTo}, Completed: ${task.completed})`);
        });
    });
}

// Chat Module
const messages = [];

function sendMessage(from, to, message) {
    messages.push({ from, to, message, timestamp: new Date() });
    console.log(`Message sent from ${from} to ${to}.`);
}

function viewMessages(user) {
    console.log(`Messages for ${user}:`);
    messages.filter(msg => msg.to === user).forEach(msg => {
        console.log(`[${msg.timestamp}] ${msg.from}: ${msg.message}`);
    });
}

// Main Application Flow
console.log("=== Application Start ===");

// Adding users
addUser("Alice", "password123");
addUser("Bob", "qwerty");
addUser("Charlie", "letmein");

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

// Managing projects
addProject("Website Redesign", "Update the company website to a modern design.");
addTaskToProject("Website Redesign", "Create mockups", "Design the homepage and product page mockups.", "Charlie");
addTaskToProject("Website Redesign", "Develop frontend", "Implement the mockups using React.", "Alice");

listProjects();

// Messaging
sendMessage("Alice", "Bob", "Can you review the latest report draft?");
sendMessage("Charlie", "Alice", "Mockups are ready for feedback.");

viewMessages("Alice");
viewMessages("Bob");

console.log("=== Application End ===");
