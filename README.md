# TuteDude_React

This is the file for TuteDude - React JS - Course

## Assignment - 1

Here's a guide to creating a counter application using both a class component and a functional component in React. Each component will have increment and decrement functionality using "+" and "-" buttons.

### Requirement Points:
- Create an attractive Ui
- The number can not be less than 0 
- Give proper Heading Class and Function Component 
- Show both components in ROW
- Show Main heading name “Assignment-2 Counter Application”
- Submission Guidelines
- Deploy the React code on Netlify and Vercel.
- If you don’t know how to deploy React code on a free hosting platform, watch this
- YouTube video [Watch Video](https://youtu.be/AP0fKMrmyKA?si=wKbklcCA3rGCFDb7)
- Deploy Link: Submit Deploy Link in Readme.md file of task-related GitHub repo.
- Submission Link: Submit the GitHub repo Link in the Submission Box.

### Assignment - 1 Deployment
View the [Counter App](https://tutedude-counter-assignment-1.netlify.app/)

## Assignment - 2

### Objective

The goal of this assignment is to create a basic To-Do application using React. The app will allow users to add tasks to a list, manage the state of these tasks, and ensure a dynamic user interface.

### Requirements

#### Todo: Add an Input Field
- Text Input Field: Provide a text input field where users can type in the title of their to-do task.
- Button: Create a button to add a Todo
- Show Alert: On button click, display an alert if the input field is empty when entering a todo. If the input is not empty, show a successful add message.

#### Display Added Items
- List of Tasks: After clicking the "Add" button, the task should appear below the input field as part of a to-do list.
- Add complete functionality: Use a checkbox with each todo for showing complete when the checkbox is checked

#### UI/UX
- Dynamic Rendering: The list of added to-dos should be displayed below the input field and rendered dynamically without reloading the page.
- Attractive Design: Create a good-looking website 
- Submission Guidelines
- Deploy the React code on Netlify and Vercel.
- If you don’t know how to deploy React code on a free hosting platform, watch this YouTube video [Watch Video](https://youtu.be/AP0fKMrmyKA?si=wKbklcCA3rGCFDb7)
- Deploy Link: Submit Deploy Link in Readme.md file of task-related GitHub repo.
- Submission Link: Submit the GitHub repo Link in the Submission Box.

### Assignment - 2 Deployment
View the [Todo App](https://tutedude-todo-app-assignment-2.netlify.app/)

## Assignment - 3

### Objective

Creating a React application for an online shoe store involves several components and functionalities that work together to provide a seamless shopping experience. This guide will help you build a basic version of such an application, focusing on state management with the useState hook.

### Requirements

Your task is to develop a React application for a shoe store. It allows customers to view available shoes and add them to their shopping cart using the useState hook provided by React. The application should consist of the following key components:

#### Displaying Shoes:
You can display a collection of shoes available for purchase on the left side. Each shoe should include relevant information such as name, price, and an image.

#### Shopping Cart:
I'd like for you to implement a shopping cart on the right where users can add selected shoes and view their choices. The cart should display the name, price, and quantity of each item.

#### Add to Cart: 
Enable users to add shoes to their shopping cart by clicking on an "Add to Cart" button associated with each shoe. Implement the logic to update the cart state accordingly using the useState hook.

#### Remove from Cart:
Allow users to remove items from their shopping cart. Implement functionality to decrease the quantity.

#### Cart Total:
Display the total cost of all items in the shopping cart.

### Assignment - 3 Deployment
View the [Shoe Store App](https://tutedude-shoe-store-app-assignment-3.netlify.app/)

## Assignment - 4

### Objective

Creating a React application using the React Router in which we make a four-page Home, About, User Info, and Not Found Page. 

### Problem Description:

Your task is to develop a React application for a shoe store. It allows customers to view available shoes and add them to their shopping cart using the useState hook provided by React. The application should consist of the following key components:

#### Home and About Page:

Create both pages with your mind, but the UI is attractive. You can choose any website's home and about page, but not copy code, and not create with AI.

#### User Info Page:
Display details of any person, such as their image, name, age, date of birth, and more.

#### Not Found Page:
Show not found page if user accesses the page rather than home, about, and user info

#### Header:
Create a header part with logo and Navlink

### The website should be Responsive according to all screen sizes 

### Assignment - 4 Deployment
View the [Router Demo App](https://tutedude-router-demo-app-assignment-4.netlify.app/)

## Assignment - 5

### Objective
Develop a React application for an online shoe store with the capability to manage state using Redux. Implement a payment feature that allows users to transition seamlessly from the shopping cart to a payment page. Users should be able to view their cart contents, return to shopping, and enter credit card details for payment processing.

### Problem Description:
Let's make the app using React-Redux, and Redux Toolkit. The application should consist of the following key components:

#### Redux Integration:
Integrate Redux into the React application to manage the state related to the shopping cart.

#### Payment Option: 
Implement a "Proceed to Payment" button within the shopping cart. Clicking this button should redirect users to the payment page.

#### Credit Card Payment:
Include a form on the payment page for users to enter credit card details. 

#### Payment Page: 
Create a payment page where users can view their shopping cart contents. Provide an option for users to return to their shopping cart if they wish to modify it before proceeding with payment.

#### Search Bar: 
Include search bar functionality that is missing from the video. Therefore, implement this feature based on your understanding. 

#### Redux Actions and Reducers:
Define Redux actions and reducers to handle state updates for adding items to the cart and removing items from the cart.

### Assignment - 5 Deployment
View the [Store Demo App](https://tutedude-store-demo-app-assignment-5.netlify.app/)

## Assignment - 6

### Objective
Creating a user management application in React involves several steps, from setting up your project to implementing CRUD operations using Axios for HTTP requests. Here's a comprehensive guide to help you develop a fully functional React app that interacts with a public API.

### Project Requirement:

#### Fetch and Display Users:
- On component mount, fetch a list of users from the provided API.
- Display users in a table or card layout showing Name, Email, and Username.

#### Add User:
Create a form with inputs for Name, Email, and Username.
On form submit, send a POST request to add the user.
Update the UI to include the new user.

#### Update User:
- Add an edit button for each user.
- When clicked, populate the form with the user’s data.
- Allow editing and submitting changes via a PUT/PATCH request.
- Reflect changes in the UI after a successful update.

#### Delete User:
- Add a delete button for each user.
- Confirm deletion before sending a DELETE request.
- Remove the user from the UI on success.

#### Error Handling:
- Show appropriate error messages when API requests fail.
- Validate form inputs (non-empty and valid email format).

#### Loading State:
- Display a loading indicator while fetching data.
- API to use:
Use the JSON Placeholder fake API:
    - GET users: https://jsonplaceholder.typicode.com/users
    - POST user: https://jsonplaceholder.typicode.com/users
    - PUT/PATCH user: https://jsonplaceholder.typicode.com/users/:id
    - DELETE user: https://jsonplaceholder.typicode.com/users/:id

### Assignment - 6 Deployment
View the [User Management App](https://tutedude-user-m-app-assignment-6.netlify.app/)