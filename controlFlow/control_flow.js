let userRole = "admin";
let accessLevel;
if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}
console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;
if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}
console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;
switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}
console.log("User Category:", userCategory);

let Dietary_Services = "Employee";
let eligibility;
switch(Dietary_Services){
    case "Employee":
        eligibility = "Eligible to avail service"
        break;
    case "Enrolled Member":
        eligibility = "Eligible to avail service and one-on-one interaction with a dietician"
        break;
    case "Non-Subscriber":
        eligibility = "enroll or at least subscribe first to avail this facility" 
        break;
}

console.log(Dietary_Services, eligibility)