# Resume Generation API with Adobe Document Generation
This project demonstrates a web application that generates resumes using the Adobe Document Generation API. The backend is implemented in Node.js, while the frontend is built using React.js. The application allows users to fill in a form with their details, select a template, and generate a resume based on the chosen template.

## Backend (Node.js)

The backend of the application is built with Node.js and utilizes the Express framework to handle API requests. It interacts with the Adobe Document Generation API to generate resumes based on predefined templates. The generated resumes are then saved to a desired folder on the server.

To run the backend:

1. Install Node.js (if not already installed).
2. Clone the repository
3. Navigate to the backend directory: `cd backend`
4. Install the dependencies: `npm install`
5. Start the server: `node server.js` (note the server is set default to port 3001, make sure there's nothing running on this port or else change the port. Also make sure to change the port in the post request in the form located in sidebar component of frontend.)


## Frontend (React.js)

The frontend of the application is built using React.js, providing an interactive user interface for filling in the form and generating resumes. The form collects user details and allows users to select a template for resume generation by previewing the sample resume.

To run the frontend:

1. Navigate to the frontend directory: `cd frontend`
2. Install the dependencies:`npm install`
3. Start the development server: `npm start`(note the frontend applicaition is set default to port 3000, make sure there's nothing running on this port or else change the port.')

## Additional Steps

Before running the application, ensure you have the following:

- Adobe Document Generation API credentials, including the API access token.
- Update the backend code (`.env` file) with your template ID and API access token.
- Adjust the backend code to save the generated resumes to your desired folder.
    - Currently, the files are being saved at `/results` (that is in results folder in root directory)
    - For updating/changing and adding templates, the location is: `./frontend/public/ResumeTemplates/`
   
## Deliverables

- All the necessary deliverabels, i.e. API specification and sample cURL request are available `./deliverables` folder.