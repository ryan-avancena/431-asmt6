const productInfo = `
<h3>Design a Product Information Schema for an E-commerce Platform</h3>
<p>In this assignment, you will design a schema for an e-commerce platform that stores information about products. The schema should include the following fields:</p>
<table class="reqs" border="1" cellspacing="0" cellpadding="5">
    <thead>
        <tr>
            <th>Field Name</th>
            <th>Data Type</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>studentName</td>
            <td>String</td>
            <td>Input <strong>your name exactly as you did in the form above.</strong></td>
        </tr>
        <tr>
            <td>name</td>
            <td>String</td>
            <td>Name of the product.</td>
        </tr>
        <tr>
            <td>category</td>
            <td>String</td>
            <td>Category to which the product belongs.</td>
        </tr>
        <tr>
            <td>type</td>
            <td>String</td>
            <td>Specific type or model of the product.</td>
        </tr>
        <tr>
            <td>dimensions</td>
            <td>Object</td>
            <td>Dimensions of the product, including height, width, and depth.</td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;height</td>
            <td>Number</td>
            <td>Height of the product in units.</td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;width</td>
            <td>Number</td>
            <td>Width of the product in units.</td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;depth</td>
            <td>Number</td>
            <td>Depth of the product in units.</td>
        </tr>
        <tr>
            <td>sold</td>
            <td>Number</td>
            <td>Number of units sold.</td>
        </tr>
        <tr>
            <td>stock</td>
            <td>Number</td>
            <td>Number of units available in stock.</td>
        </tr>
        <tr>
            <td>onSale</td>
            <td>Boolean</td>
            <td>Indicates if the product is currently on sale.</td>
        </tr>
        <tr>
            <td>weight</td>
            <td>Decimal</td>
            <td>Weight of the product, using <code>$numberDecimal</code> for precision.</td>
        </tr>
        <tr>
            <td>attributes</td>
            <td>Array of Strings</td>
            <td>List of attributes or features of the product.</td>
        </tr>
        <tr>
            <td>reviews</td>
            <td>Array of Objects</td>
            <td>Customer reviews for the product.</td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;headline</td>
            <td>String</td>
            <td>Headline of the review.</td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;rating</td>
            <td>Number</td>
            <td>Rating given by the customer.</td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;date</td>
            <td>Date</td>
            <td>Date the review was posted, using <code>$date</code> format.</td>
        </tr>
    </tbody>
</table>
`;

const postInfo = `
<h3>Design a Blog Post Schema for a Blogging Platform</h3>
<p>In this assignment, you will design a schema for a blogging platform that stores information about blog posts. The schema should include the following fields:</p>
<table class="reqs" border="1" cellpadding="5" cellspacing="0">
    <thead>
        <tr>
            <th>Field Name</th>
            <th>Data Type</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>studentName</td>
            <td>String</td>
            <td>Input <strong>your name exactly as you did in the form above.</strong></td>
        </tr>
        <tr>
            <td>permalink</td>
            <td>String</td>
            <td>Permanent link to the blog post.</td>
        </tr>
        <tr>
            <td>title</td>
            <td>String</td>
            <td>Title of the blog post.</td>
        </tr>
        <tr>
            <td>content</td>
            <td>String</td>
            <td>Main content of the blog post.</td>
        </tr>
        <tr>
            <td>author</td>
            <td>Object</td>
            <td>Details of the author of the blog post.</td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;first_name</td>
            <td>String</td>
            <td>First name of the author.</td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;last_name</td>
            <td>String</td>
            <td>Last name of the author.</td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;email</td>
            <td>String</td>
            <td>Email address of the author.</td>
        </tr>
        <tr>
            <td>views</td>
            <td>Number</td>
            <td>Number of times the blog post has been viewed.</td>
        </tr>
        <tr>
            <td>likes</td>
            <td>Number</td>
            <td>Number of likes the blog post has received.</td>
        </tr>
        <tr>
            <td>active</td>
            <td>Boolean</td>
            <td>Indicates if the blog post is currently active.</td>
        </tr>
        <tr>
            <td>date</td>
            <td>Date</td>
            <td>Date the blog post was published, using <code>$date</code> format.</td>
        </tr>
        <tr>
            <td>tags</td>
            <td>Array of Strings</td>
            <td>Tags associated with the blog post.</td>
        </tr>
        <tr>
            <td>comments</td>
            <td>Array of Objects</td>
            <td>Comments on the blog post.</td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;author</td>
            <td>String</td>
            <td>Author of the comment.</td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;content</td>
            <td>String</td>
            <td>Content of the comment.</td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;date</td>
            <td>Date</td>
            <td>Date the comment was posted, using <code>$date</code> format.</td>
        </tr>
    </tbody>
</table>
`;

const bookInfo = `
<h3>Design a Book Information Schema for a Library Database</h3>
<p>In this assignment, you will design a schema for a library database that stores information about books. The schema should include the following fields:</p>
<table class="reqs" border="1" cellpadding="5" cellspacing="0">
    <thead>
        <tr>
            <th>Field Name</th>
            <th>Data Type</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>studentName</td>
            <td>String</td>
            <td>Input <strong>your name exactly as you did in the form above.</strong></td>
        </tr>
        <tr>
            <td>isbn</td>
            <td>String</td>
            <td>International Standard Book Number.</td>
        </tr>
        <tr>
            <td>title</td>
            <td>String</td>
            <td>Title of the book.</td>
        </tr>
        <tr>
            <td>category</td>
            <td>String</td>
            <td>Category or genre of the book.</td>
        </tr>
        <tr>
            <td>author</td>
            <td>Object</td>
            <td>Details of the author of the book.</td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;first_name</td>
            <td>String</td>
            <td>First name of the author.</td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;last_name</td>
            <td>String</td>
            <td>Last name of the author.</td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;title</td>
            <td>String</td>
            <td>Title or designation of the author (e.g., Dr., Prof.).</td>
        </tr>
        <tr>
            <td>pages</td>
            <td>Number</td>
            <td>Number of pages in the book.</td>
        </tr>
        <tr>
            <td>rating</td>
            <td>Number</td>
            <td>Average rating of the book.</td>
        </tr>
        <tr>
            <td>available</td>
            <td>Boolean</td>
            <td>Indicates if the book is currently available.</td>
        </tr>
        <tr>
            <td>publishDate</td>
            <td>Date</td>
            <td>Date the book was published, using <code>$date</code> format.</td>
        </tr>
        <tr>
            <td>keywords</td>
            <td>Array of Strings</td>
            <td>Keywords associated with the book.</td>
        </tr>
        <tr>
            <td>readerLog</td>
            <td>Array of Objects</td>
            <td>Log of readers who have checked out the book.</td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;readerName</td>
            <td>String</td>
            <td>Name of the reader who checked out the book.</td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;checkoutDate</td>
            <td>Date</td>
            <td>Date the book was checked out, using <code>$date</code> format.</td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;returnDate</td>
            <td>Date</td>
            <td>Date the book was returned, using <code>$date</code> format.</td>
        </tr>
    </tbody>
</table>
`;
import crypto from 'crypto';
import express from 'express';

const app = express();
const port = 3000;



const prompts = [
    productInfo,
    postInfo,
    bookInfo
];

// Function to sanitize the student name
function sanitizeInput(input) {
    input = input.toLowerCase();
    // Remove spaces, hyphens, and non-alpha characters
    return input.replace(/[^a-zA-Z]/g, '');
}

// Function to get assignment prompt based on student name
function getAssignmentPrompt(studentName) {
    // Sanitize the student name
    studentName = sanitizeInput(studentName);

    // Create a hash from the student name
    const hash = crypto.createHash('md5').update(studentName).digest('hex');

    // Convert the hash to a numeric value
    const numericHash = parseInt(hash, 16);

    // Use the numeric hash to select an assignment
    const promptIndex = numericHash % prompts.length;

    return prompts[promptIndex];
}

// Function to generate the HTML page
function getPageHtml(prompt) {
    return `<!DOCTYPE html>
<html lang="en">    
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Homework 6: MongoDB Schema</title>
    <style>
        body {
        font-size: 16px;
        font-family: arial, sans-serif;
        }
        h2{
            text-align: center; 
            margin:10px auto;
        }
        .content{
        margin: 0 auto;
        max-width: 800px;
        padding: 20px;}

        table.reqs {
        table-layout:fixed;
        width:100%;
        border-collapse:collapse;
        border:1px solid #000;
        }
        table.reqs th, table.reqs td {
        padding:10px;
        }
        table.reqs th {
        background-color:#f2f2f2;
        font-weight:bold;
        }
        table.reqs td {
        font-family: Lucida Console, Monaco, monospace;
        }
    </style>
</head>
<body>  
    <h1>Homework 6 Assignment Info Generator</h1>
    <form action="/assignment" method="post">
        <label for="studentName">Enter your name:</label>
        <input type="text" id="studentName" name="studentName" required>
        <button type="submit">Get Assignment</button>
        <hr>
        <p>Node: Enter your name as it appears in canvas (excluding any pronoun information).</p>
        <hr>
    </form>
    <div id="content">${prompt ? `<h2>Your Custom Assignment:</h2><div class="content">${prompt}</div>` : ''}</div>
</body>  
</html>`;
}

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Route to display the form
app.get('/', (req, res) => {
    res.send(getPageHtml());
});

// Route to process the form submission
app.post('/assignment', (req, res) => {
    const studentName = req.body.studentName;
    const prompt = getAssignmentPrompt(studentName);
    res.send(getPageHtml(prompt));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});