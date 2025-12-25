# Hotel Booking Website

A simple hotel booking website built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This application allows users to register and log in (including via Gmail), register hotels, manage rooms as hotel owners, check room availability, book rooms with online payment via Stripe, and view booking history. It includes email confirmations for bookings using Nodemailer.


## Demo

Click the link below to see the demonstration of the Hotel Booking Website.

Link 👉 https://drive.google.com/file/d/1A8VLDsBnGmKHmZVfHuvAbMBHQm1NEPjI/view?usp=sharing 👈


## Features

### Hotel Owner (Admin)
- Hotel Registration: Register a hotel with name, phone number, address, and city (Dubai, Singapore, New York, London).
- Admin Dashboard: View total bookings, total revenue, and recent bookings.
- Add Room: Upload room details including images, room type (single bed, double bed, luxury room, family suite), price per day, and amenities (select one or more: free WiFi, free breakfast, room service, mountain view, pool access).
- List Rooms: View details of all added rooms.

### User
- User Registration & Login: Register with first name, last name, email, and password, or via Gmail; log in with credentials.
- Book Room: Check availability by entering check-in date, check-out date, and number of guests; book available rooms and make online payment via Stripe.
- My Bookings: View details of all booked rooms.

### Authentication & Access Control
- Clerk for user authentication (login, register) and authorization, including Gmail integration.
- Hotel Owner Access: Users who register a hotel can access the admin dashboard for hotel and room management.
- User Access: Logged-in users can book rooms and view their bookings but cannot manage hotels or rooms unless they register a hotel.


## Technologies Used

### Frontend
- React with Vite
- Tailwind CSS for styling
- Axios for API calls
- React Hot Toast for notifications

### Backend
- Node.js with Express.js
- MongoDB for the database
- Multer for handling room image uploads
- Cloudinary for image storage
- Stripe for payment gateway
- Nodemailer for sending booking confirmation emails
- Clerk for authentication and authorization
- dotenv for environment variables


## Installation

Clone the repository and navigate to each project folder to install dependencies.
```bash
  git clone https://github.com/MrTharinduDasantha/Hotel-Booking-Website.git
  cd Hotel-Booking-Website
```
#### Folder Setup
The project is divided into two main folders: client (frontend) and server (backend). You will need to install dependencies for each.
- Navigate to each folder (client, server) and run.
```bash
npm install
```
#### Environment Variables
Before running the app, configure the .env files in the client and server folders with the necessary environment variables.
- Create a .env file in the client folder.
- Replace the placeholders with your actual values ​​or leave these values ​​as they are if you prefer:
```bash
VITE_CLERK_PUBLISHABLE_KEY=Enter your Clerk publishable key
VITE_BACKEND_URL=http://localhost:4000
VITE_CURRENCY=$
```
- Create a .env file in the server folder.
- Replace placeholders with your actual values:
```bash
PORT = 4000

# Mongodb setup
MONGODB_URI = "Enter your mongodb uri"

# Clerk setup
CLERK_PUBLISHABLE_KEY = "Enter your Clerk publishable key"
CLERK_SECRET_KEY = "Enter your Clerk secret key"
CLERK_WEBHOOK_SECRET = "Enter your Clerk webhook secret"

# Cloudinary setup
CLOUDINARY_CLOUD_NAME = "Enter your cloudinary cloud name"
CLOUDINARY_API_KEY = "Enter your cloudinary api key"
CLOUDINARY_API_SECRET = "Enter your cloudinary api secret"

# Nodemailer setup
SENDER_EMAIL = "Enter your sender email"
SMTP_USER = "Enter your SMTP user"
SMTP_PASS = "Enter your SMTP password"

# Stripe setup
STRIPE_PUBLISHABLE_KEY = "Enter your stripe publishable key"
STRIPE_SECRET_KEY = "Enter your stripe secret key"
STRIPE_WEBHOOK_SECRET = "Enter your stripe webhook secret"
```
#### Run the Project.
- Start the backend server
```bash
cd server
npm run server
```
- Start the frontend
```bash
cd ../client
npm run dev
```


## Usage
1. Admin (Hotel Owner)
- After registering a hotel, navigate to the Admin Dashboard. (http://localhost:5173/owner).
2. Client
- Open the Frontend Interface (http://localhost:5173).


## Screenshots

![image alt](https://github.com/MrTharinduDasantha/Hotel-Booking-Website/blob/bb2dccc89355b3e09003568acb27c9d3fc43f34e/Img%20-%201.png)
![image alt](https://github.com/MrTharinduDasantha/Hotel-Booking-Website/blob/bb2dccc89355b3e09003568acb27c9d3fc43f34e/Img%20-%202.png)
![image alt](https://github.com/MrTharinduDasantha/Hotel-Booking-Website/blob/bb2dccc89355b3e09003568acb27c9d3fc43f34e/Img%20-%203.png)
![image alt](https://github.com/MrTharinduDasantha/Hotel-Booking-Website/blob/bb2dccc89355b3e09003568acb27c9d3fc43f34e/Img%20-%204.png)
![image alt](https://github.com/MrTharinduDasantha/Hotel-Booking-Website/blob/bb2dccc89355b3e09003568acb27c9d3fc43f34e/Img%20-%205.png)
![image alt](https://github.com/MrTharinduDasantha/Hotel-Booking-Website/blob/bb2dccc89355b3e09003568acb27c9d3fc43f34e/Img%20-%206.png)
![image alt](https://github.com/MrTharinduDasantha/Hotel-Booking-Website/blob/bb2dccc89355b3e09003568acb27c9d3fc43f34e/Img%20-%207.png)
![image alt](https://github.com/MrTharinduDasantha/Hotel-Booking-Website/blob/bb2dccc89355b3e09003568acb27c9d3fc43f34e/Img%20-%208.png)
![image alt](https://github.com/MrTharinduDasantha/Hotel-Booking-Website/blob/bb2dccc89355b3e09003568acb27c9d3fc43f34e/Img%20-%209.png)
![image alt](https://github.com/MrTharinduDasantha/Hotel-Booking-Website/blob/bb2dccc89355b3e09003568acb27c9d3fc43f34e/Img%20-%2010.png)
![image alt](https://github.com/MrTharinduDasantha/Hotel-Booking-Website/blob/bb2dccc89355b3e09003568acb27c9d3fc43f34e/Img%20-%2011.png)
![image alt](https://github.com/MrTharinduDasantha/Hotel-Booking-Website/blob/bb2dccc89355b3e09003568acb27c9d3fc43f34e/Img%20-%2012.png)
![image alt](https://github.com/MrTharinduDasantha/Hotel-Booking-Website/blob/bb2dccc89355b3e09003568acb27c9d3fc43f34e/Img%20-%2013.png)
![image alt](https://github.com/MrTharinduDasantha/Hotel-Booking-Website/blob/bb2dccc89355b3e09003568acb27c9d3fc43f34e/Img%20-%2014.png)
![image alt](https://github.com/MrTharinduDasantha/Hotel-Booking-Website/blob/bb2dccc89355b3e09003568acb27c9d3fc43f34e/Img%20-%2015.png)
![image alt](https://github.com/MrTharinduDasantha/Hotel-Booking-Website/blob/bb2dccc89355b3e09003568acb27c9d3fc43f34e/Img%20-%2016.png)

<h4 align="center"> Don't forget to leave a star ⭐️ </h4>

