# Node Boot Camp

This project was made while I was learning about Node.js and REST APIs.

## How to run this project?

This project

## What is an API and a REST API?

An API is a set of definitions and protocols for building and integrating application software. It is a mediator between the client and the server.

A REST API is an API (Application Protocol Interface) that represents an state, is an architecture style and allows for interacting with RESTful web services. REST stands for representational state transfer. The REST APIs are stateless.

Common HTTP verbs for API's:

- **GET:** It is used to request information from the server. Examples: get all elements, get element details and for searches. GET is an idempotent method because it is going to return the same information at unless the information is updated or deleted.

  Common http code response:

  - 200 (OK)
  - 404 (Not Found)
  - 500 (Internal Server Error)

- **POST:** It is used to create resources. Examples: Add a new element and its details. It is an idempotent method.

  Common http code response:

  - 201 (Created)
  - 500 (Internal Server Error)

- **PUT:** It is used for updating resources but for a total element update. It is not an idempotent method.

  Common http code response:

  - 200 (OK)
  - 204 (No Content)
  - 405 (Method Not Allowed)
  - 500 (Internal Server Error)

- **PATCH:** It is used for updating resources but is a partial update. It is not an idempotent method.

  Common http code response:

  - 200 (OK)
  - 204 (No Content)
  - 405 (Method Not Allowed)
  - 500 (Internal Server Error)

- **DELETE:** It is used for deleting resources. It is not an idempotent method.

  Common http code response:

  - 200 (OK)
  - 404 (Not Found)
  - 500 (Internal Server Error)
