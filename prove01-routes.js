const express = require('express');
const router = express.Router();

const users = ['Admin', "Alain", "Hansen", "Willson"];
router.get('/', (req, res, next) => {
    // Request handling
    // CORE CHALLENGE 1 -
    // HTML page is written
    res.write('<html>');
    res.write('<head><title>Hello Browser!</Title></head>');
    res.write('<body>');
    res.write('<h1>Wellcome</h1>');
    res.write('<h2>Create User</h2>');
    // Form for "./create-user".
    res.write('<form action="./create-user" method="POST">');
    res.write('<input type="text" name="newUser" placeholder="username">');
    res.write('<button type="submit">Submit</button>');
    res.write('</form>');
    // End tags

    res.write('</body>');
    res.write('</html>');
    return res.end(); // Return so you don't execute remaining code outside of if statement
});

// CORE CHALLENGE 2 -
router.get('/users', (req, res, next) => {
    res.write('<html>');
    res.write('<body>');
    res.write('<ul>');
    // Loop through activities using for...of loop to display the list
    for (const user of users) {
        res.write(`<li>${user}</li>`);
    }
    res.write('</ul>');
    res.write('<a href="/">New User</a></br>')
    res.write('</body>');
    res.write('</html>');
    return res.end(); // Return so you don't execute remaining code outside of if statement
});

// CORE CHALLENGE 3 -
router.post('/create-user', (req, res, next) => {
    const body = [];
    req.on('data', (chunk) => {
        body.push(chunk);
    });
    return req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const newUser = parsedBody.split('=')[1];
        // Console log seen in terminal, may be encoded, but isn't important for now
        console.log(newUser);
        users.push(newUser);

        // Remain on './activities' url.
        res.writeHead(302, {'Location': 'users'});
        res.end();
    });
});

module.exports = router;