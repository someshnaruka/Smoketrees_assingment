
# User Registration



## Tech Stack

**Backend:**

- Node.js: Node.js is a server-side JavaScript runtime that allows you to run JavaScript on the server. It is used to build the backend server for your application.
- Express.js: Express.js is a Node.js web application framework that simplifies the creation of APIs and routes. It is used to build the backend API for your application.
- EJS:  EJS simply stands for Embedded Javascript. It is a simple templating language/engine that lets its user generate HTML with plain javascript. It offers an easier way to interpolate (concatenate) strings effectively.

**Database**

- MongoDB: MongoDB is a NoSQL database that stores data in a flexible, JSON-like format. It is used to store company fiscal data, user information, and other relevant data.



## Installation

To set up the application locally, follow these steps:

Clone the repository: 
```bash
  git clone https://github.com/someshnaruka/Smoketrees_assingment.git
```

Navigate to the project directory: 
```bash
  cd Smoketrees_assingment
```
Install server dependencies:
```bash
  npm install
```



Start server:
```bash
  node index.js 
```


- Open your browser and visit http://localhost:8080 to access the application.
## Usage

- Register by filling details.

- Username stored in users tables.

- Address stored in address table with ono to one relation with username using objectId of registered user from users table and user field of its address from address table.



## Screenshots

![App Screenshot](https://res.cloudinary.com/dq7ld5q65/image/upload/v1694070046/user_vzh8yh.png)
![App Screenshot](https://res.cloudinary.com/dq7ld5q65/image/upload/v1694070046/address_nvyc5j.png)



## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


## Contact

Contact
If you have any questions or issues, feel free to contact us at someshnaruka@gmail.com

Happy coding! 🚀