/* Reset some default styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Global styles */
body {
    font-family: 'Arial', sans-serif;
    background-color: #000000; /* Complete black background */
    color: #ffffff; /* White text color */
    transition: background-color 0.3s ease, color 0.3s ease;
}

header {
    background-color: #000000; /* Black background for header */
    color: #ffffff; /* White text for header */
    padding: 20px 0;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

header h1 {
    margin-bottom: 10px;
}

button {
    padding: 10px 20px;
    border: none;
    background-color: #ffffff; /* White button */
    color: #000000; /* Black text for button */
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #dddddd; /* Light gray on hover */
}

nav {
    margin-top: 10px;
}

nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
}

nav ul li {
    margin: 0 15px;
}

nav ul li a {
    color: #ffffff; /* White links in header */
    text-decoration: none;
    font-size: 18px;
    transition: color 0.3s ease;
}

nav ul li a:hover {
    color: #007BFF; /* Highlight color on hover */
}

/* Section styles */
.section {
    padding: 50px 20px;
    text-align: center;
    margin-top: 30px;
    background-color: #000000; /* Black background for sections */
    color: #ffffff; /* White text in sections */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    opacity: 0;
    animation: fadeIn 1s forwards;
}

.section h2 {
    margin-bottom: 20px;
    font-size: 2rem;
    color: #ffffff; /* White text for section headers */
}

.section p {
    font-size: 1.2rem;
    color: #ffffff; /* White text for paragraph */
}

/* Footer styles */
footer {
    background-color: #000000; /* Black background for footer */
    color: #ffffff; /* White text for footer */
    padding: 20px 0;
    text-align: center;
    margin-top: 40px;
}

footer p {
    font-size: 14px;
}

/* Animations */
@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
