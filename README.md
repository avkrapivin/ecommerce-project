# Full Stack E-commerce Project

This project implements an e-commerce web application using modern technologies — Angular for the frontend and Spring Boot for the backend. MySQL is used as the relational database.

## Technologies

- **Frontend:** Angular, TypeScript, HTML, CSS  
- **Backend:** Spring Boot, Java, Spring Data JPA, Spring Security, Okta OAuth2  
- **Database:** MySQL 8  
- **Dockerization:** Docker, Docker Compose  
- **Extras:** Stripe API for payment processing, HTTPS with a self-signed certificate

## About the Project

This is a fully functional online store that allows users to browse products, place orders, register and authenticate securely.

## Database Structure

The project uses a relational MySQL database with key entities:

- **Customers (customer)** — stores user information  
- **Products (product)** and **Categories (product_category)**  
- **Orders (orders)** and **Order Items (order_item)**  
- **Addresses, States, Countries**

The full DDL scripts and initialization SQL files are located in the [`/mysql`](./mysql) directory.

## Running with Docker

To simplify setup, Docker images have been built and configured via `docker-compose.yml`.

### Steps to Run:

1. Clone the repository:
   ```
   git clone https://github.com/avkrapivin/ecommerce-project.git
   cd ecommerce-project
   ```
2. Start the application in the background:
   ```
   docker-compose up -d
   ```
3. Wait until all services are healthy (you can monitor with docker-compose logs -f).
4. Open the following URLs in your browser:
   - Angular frontend: [https://localhost:4200](https://localhost:4200)
   - Spring Boot backend: [https://localhost:8443/api](https://localhost:8443/api)

### Alternative: Without cloning the repository

If you only want to run the project without cloning the full source code:

1. Create a new project folder
2. Create a file `docker-compose.yml`
3. Copy the full content of the compose file from [docker-compose.yml](./docker-compose.yml)
4. Copy the contents of the [`/mysql`](./mysql) folder from this repository into a new mysql subfolder in your project folder
5. Your folder structure should now look like this:
    ```
    my-docker-app/
    ├── docker-compose.yml
    └── mysql/
        ├── 01-init.sql
        └── 02-init-auth.sql
    ```

6. Run:
   ```
   docker-compose up -d
   ```

## Notes

   - On first launch, your browser may warn about the self-signed HTTPS certificate — accept the exception to proceed.
   - Make sure Docker is running and has enough allocated resources (CPU, memory).