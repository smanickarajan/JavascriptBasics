let role = 'vendor';

//if-else

if (role === 'guest')
    console.log("Guest User");
else if (role === 'admin')
    console.log("Admin User");
else if (role === 'vendor')
    console.log("Vendor User");
else
    console.log("No User");

//Swith Case

switch (role) {
    case 'guest':
        console.log("Guest User");
        break;
    case 'admin':
        console.log("Admin User");
        break;
    case 'vendor':
        console.log("Vendor User");
        break;
    default: console.log("No User");
        break;
}