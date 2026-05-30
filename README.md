# Sarah Collins Portfolio

A modern, responsive multi-page portfolio website built to showcase Sarah Collins’ profile, skills, and projects.

## Live Pages

- `index.html` – Hero landing page with animated introduction
- `aboutme.html` – Professional summary, technical skills, and competencies
- `projects.html` – Project gallery with interactive project detail modal
- `contact.html` – Contact form with client-side validation

## Features

- Responsive layout using Bootstrap 5
- Custom styling and visual branding
- Animated hero/typewriter text effects
- Project card interactions and modal details
- Accessible navigation and skip links
- Contact form UI with validation and JSON submission

## Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)
- Bootstrap 5
- Font Awesome

## Project Structure

```text
project1-portfolio/
├── index.html
├── aboutme.html
├── projects.html
├── contact.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── script.js/
│   │   └── script.js
│   ├── images/
│   └── resume.pdf
└── README.md
```

## Run Locally

This is a static site, so you can run it with any simple local web server.

### Option 1: Python

```bash
cd /tmp/workspace/alssl27/project1-portfolio
python3 -m http.server 8000
```

Then open:

`http://localhost:8000/index.html`

### Option 2: VS Code Live Server

Open the repository in VS Code and run **Live Server** from `index.html`.

## Contact Form Note

The contact page sends a `POST` request to `/contact`.  
To persist submissions, pair this frontend with a backend endpoint that accepts JSON and stores messages.

## Author

**Sarah Collins**  
GitHub: [@alssl27](https://github.com/alssl27)