export const projects = [
  {
    id: 1,
    title: 'NLP-Based Drone Control with Mixed Reality',
    description: 'Real-time drone control interface combining Natural Language Processing and Mixed Reality.',
    principles: 'Human-computer interaction, signal processing, and command parsing to interpret voice commands and translate them into drone navigation.',
    image: '/Images/Drone.jpg',
    technologies: ['Python', 'Unity', 'Git'],
    githubUrl: '', 
    features: [
      'Voice command recognition and processing using NLP',
      'Mixed Reality interface displaying drone status in 3D',
      'Real-time navigation control with low latency'
    ],
    progress: 'In Progress',
  },
  {
    id: 2,
    title: 'Blazor Book Tracker',
    description: 'A modern Blazor web app to manage, search, and edit a personal book collection with an elegant UI.',
    principles: 'Component-based architecture, CRUD operations with Entity Framework, and responsive user interaction using Syncfusion components.',
    image: '/Images/BookTracker.PNG',
    technologies: ['Blazor', 'C#', 'Entity Framework Core', 'SQL Server'],
    githubUrl: 'https://github.com/CountessOreo/Blazor-Book-Tracker', 
    features: [
      'Grid and card views with toggle functionality',
      'Add, edit, and delete books using modal-based forms',
      'Responsive UI with light/dark mode and smooth animations',
      'Search functionality for quick book lookup',
      'Structured service-based data handling and state management'
    ]
  },
  {
    id: 3,
    title: 'Move IT',
    description: 'A concept website for a fictional moving company',
    principles: 'Single-page design using Bootstrap, responsive layout, and clean content structure to simulate a professional service site.',
    image: '/Images/MoveIT.PNG', 
    technologies: ['HTML', 'CSS', 'Bootstrap'],
    githubUrl: 'https://github.com/CountessOreo/Move-IT-Concept-Website.git',
    features: [
      'Modern single-page layout showcasing services and contact info',
      'Responsive Bootstrap design for desktop and mobile views',
      'Clear visual hierarchy and call-to-action buttons',
      'Simple navigation anchored within the page',
      'Focus on user-friendly aesthetics and branding'
    ]
  },
  {
    id: 4,
    title: 'TinDog',
    description: 'A fun concept website promoting a fictional Tinder-style dating app for dogs.',
    principles: 'Single-page responsive layout using Bootstrap, clear marketing message, and playful UI elements to simulate a tech startup promo site.',
    image: '/Images/TinDog.PNG',
    technologies: ['HTML', 'CSS', 'Bootstrap'],
    githubUrl: 'https://github.com/CountessOreo/TinDog.git', 
    features: [
      'Catchy landing page with app marketing sections',
      'Mobile-first responsive design using Bootstrap grid system',
      'Fun and engaging call-to-action buttons for downloads',
      'Sleek section transitions and clean layout structure',
      'Mockup sections for pricing, testimonials, and social proof'
    ]
  },
  {
    id: 5,
    title: 'Student Wellness Appointment Booking System',
    description: 'Java Desktop GUI system enabling students to book counseling sessions and submit feedback.',
    principles: 'Object-oriented design, MVC architecture, and persistent data storage using embedded Java DB.',
    image: '/Images/Student Wellness.jpg',
    technologies: ['Java', 'Git'],
    githubUrl: 'https://github.com/CountessOreo/Appointment-Booking-System',
    features: [
      'Full CRUD functionality for appointments and counselors',
      'User-friendly Swing-based GUI with form validations',
      'Feedback collection and reporting modules'
    ],
  },
  {
    id: 6,
    title: 'Sentiment Analysis Web Dashboard',
    description: 'A web app that classifies IMDb movie reviews as positive or negative using NLP techniques.',
    principles: 'Text preprocessing, sentiment classification, and model evaluation using NLP and deep learning.',
    image: '/Images/Movie Sentiment.jpg',
    technologies: ['Python', 'Flask', 'NLTK', 'TensorFlow', 'Jupyter', 'Git'],
    githubUrl: 'https://github.com/CountessOreo/Sentiment-Analysis-Web-Dashboard',
    features: [
      'Preprocessing pipeline for cleaning and tokenizing reviews',
      'Sentiment classification model built with TensorFlow',
      'Web app interface built with Flask for user input and results display'
    ],
  },
  {
    id: 7,
    title: 'Grade Prediction Tool',
    description: 'Predicts student grade classifications based on input performance indicators using ML algorithms.',
    principles: 'Supervised learning, data preprocessing, model training and performance metrics.',
    image: '/Images/Grade predictor.jpg',
    technologies: ['Python', 'TensorFlow', 'Flask', 'Jupyter', 'Git'],
    githubUrl: 'https://github.com/CountessOreo/Grade-Prediction-Tool',
    features: [
      'Data preprocessing including normalization and feature engineering',
      'Model training with TensorFlow using neural networks',
      'Flask app serving predictions through a simple web interface'
    ],
  },
  {
    id: 8,
    title: 'Movie Recommendation System',
    description: 'Console application that generates movie suggestions and tracks user watchlist.',
    principles: 'OOP principles, data structures, and algorithms for efficient recommendation generation.',
    image: '/Images/Movie recommendation.jpg',
    technologies: ['C#', 'ASP.NET', 'Git'],
    githubUrl: 'https://github.com/CountessOreo/Movie-Recommendation-System',
    features: [
      'User watchlist management with CRUD operations',
      'Algorithmic recommendations based on user preferences',
      'Console UI with interactive navigation'
    ],
  },
  {
    id: 9,
    title: 'Student Enrollment System',
    description: 'A responsive web app for managing course enrollments and student subjects completion.',
    principles: 'Full-stack web development using relational databases, form validation, and CRUD operations.',
    image: '/Images/Student Enrollment.jpg',
    technologies: ['JavaScript', 'HTML', 'CSS', 'MySQL', 'Express.js', 'Node.js', 'Git'],
    githubUrl: 'https://github.com/CountessOreo/Student-Enrollment-System',
    features: [
      'Dynamic course enrollment and subject tracking',
      'Responsive UI with validation and feedback',
      'Express.js and MySQL integration'
    ],
  },
  {
    id: 10,
    title: 'Student Login and Registration Portal',
    description: 'A secure web application featuring form validation, authentication, and session handling.',
    principles: 'Focuses on web security, user authentication, and session management using PostgreSQL.',
    image: '/Images/Java PostgreSQL.jpg',
    technologies: ['Java', 'PostgreSQL', 'CSS', 'HTML', 'Git'],
    githubUrl: 'https://github.com/CountessOreo/Student-Login-and-Registration-Portal',
    features: [
      'Secure user registration with input validation',
      'Authentication with password hashing and sessions',
      'PostgreSQL database integration for user management'
    ],
  },
  {
    id: 11,
    title: 'Community Portal',
    description: 'Dynamic web application to showcase upcoming events and introduce a community.',
    principles: 'Built with Node.js, Express.js, and EJS templating engine.',
    image: '/Images/Community Portal.PNG',
    technologies: ['JavaScript', 'Node.js', 'Express.js', 'EJS', 'Git'],
    githubUrl: 'https://github.com/CountessOreo/Community-Portal-Website',
    features: [
      'Event listing with date filters',
      'Community info pages with rich text content',
      'Server-side rendering with EJS templates'
    ],
  },
  {
    id: 12,
    title: 'Static Website',
    description: 'Website about the World Wide Web, with a login/sign up and contact features.',
    principles: 'HTML, CSS, and JavaScript for static content and interactivity.',
    image: '/Images/Static Website.PNG',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Git'],
    githubUrl: 'https://github.com/CountessOreo/Static-Website',
    features: [
      'Informational pages explaining the WWW',
      'Login and signup forms with client-side validation',
      'Contact form with validation and feedback'
    ],
  }
];


