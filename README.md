### Live Link: [https://book-catallog-backend-beryl.vercel.app](https://book-catallog-backend-beryl.vercel.app)

### Application Routes:

#### Auth

- https://book-catallog-backend-beryl.vercel.app/api/v1/auth/signup (POST)
- https://book-catallog-backend-beryl.vercel.app/api/v1/auth/signin(POST)

#### Profile

- https://book-catallog-backend-beryl.vercel.app/api/v1/profile (GET)

#### User

- https://book-catallog-backend-beryl.vercel.app/api/v1/users (GET)
- https://book-catallog-backend-beryl.vercel.app/api/v1/users/6177a5b87d32123f08d2f5d4 (Single GET) Include an id that is saved in your database
- https://book-catallog-backend-beryl.vercel.app/api/v1/users/6177a5b87d32123f08d2f5d4 (PATCH)
- https://book-catallog-backend-beryl.vercel.app/api/v1/users/6177a5b87d32123f08d2f5d4 (DELETE) Include an id that is saved in your database

### Category

- https://book-catallog-backend-beryl.vercel.app/api/v1/categories/create-category (POST)
- https://book-catallog-backend-beryl.vercel.app/api/v1/categories (GET)
- https://book-catallog-backend-beryl.vercel.app/api/v1/categories/6177a5b87d32123f08d2f5d4 (Single GET) Include an id that is saved in your database
- https://book-catallog-backend-beryl.vercel.app/api/v1/categories/6177a5b87d32123f08d2f5d4 (PATCH)
- https://book-catallog-backend-beryl.vercel.app/api/v1/categories/6177a5b87d32123f08d2f5d4 (DELETE) Include an id that is saved in your database

### Books

- https://book-catallog-backend-beryl.vercel.app/api/v1/books/create-book (POST)
- https://book-catallog-backend-beryl.vercel.app/api/v1/books (GET)
- https://book-catallog-backend-beryl.vercel.app/api/v1/books/:categoryId/category (GET)
- https://book-catallog-backend-beryl.vercel.app/api/v1/books/:id (GET)
- https://book-catallog-backend-beryl.vercel.app/api/v1/books/:id (PATCH)
- https://book-catallog-backend-beryl.vercel.app/api/v1/books/:id (DELETE)

### Orders

- https://book-catallog-backend-beryl.vercel.app/api/v1/orders/create-order (POST)
- https://book-catallog-backend-beryl.vercel.app/api/v1/orders (GET)
- https://book-catallog-backend-beryl.vercel.app/api/v1/orders/:orderId (GET)
