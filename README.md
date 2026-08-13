# Blend Shop

Blend Shop is a online shop built with Next.js, React, TypeScript, and Tailwind CSS.

The application allows users to browse products, search and sort products, view individual product details, add products to a shopping cart, manage cart quantities, and complete a simple checkout flow.

## Features

### Product browsing

- Fetches products from the Noroff Online Shop API
- Displays products in a responsive grid
- Shows product images, ratings, tags, prices, and discounts
- Displays discount percentages when products are on sale

### Search and sorting

Users can search products by name.

Products can also be sorted by:

- Recommended
- Price: Low to High
- Price: High to Low
- Highest Rated
- Name: A to Z

### Product details

Each product has its own product details page.

The product page includes:

- Product image
- Product title
- Product description
- Price
- Discount information
- Rating
- Tags
- Customer reviews
- Add to Cart button

### Shopping cart

The shopping cart allows users to:

- Add products
- Increase product quantities
- Decrease product quantities
- Remove products
- Clear the cart during checkout
- View the total number of items
- View the total price
- See total savings from discounted products

Cart data is stored in `localStorage` so that the cart can persist when navigating between pages or refreshing the browser.

### Checkout

The checkout flow includes:

- Order summary
- Total items
- Total savings
- Free shipping
- Total price
- Checkout confirmation page

After checkout, the user is shown a confirmation message.

### Contact page

The contact page includes a form with validation for:

- Full name
- Email address
- Subject
- Message

Validation messages are displayed when the input does not meet the required criteria.

A success toast notification is displayed when the form is submitted successfully.

### Notifications

Toast notifications are used for user feedback, including:

- Product added to cart
- Product removed from cart
- Contact form submitted

### Responsive design

The application is designed to work across different screen sizes.

The navigation includes a mobile dropdown menu for smaller screens.

## Technologies

The project was built using:

- Next.js
- React
- TypeScript
- Tailwind CSS
- Next/Image
- Next/Link
- React Hooks
- localStorage
- Noroff Online Shop API

## API

Products are retrieved from the Noroff Online Shop API:

`https://v2.api.noroff.dev/online-shop`

Individual products are retrieved using:

`https://v2.api.noroff.dev/online-shop/{id}`


The API logic is located in:

src/lib/api.ts

## Getting Started

- Make sure you have Node.js and npm installed.

- Install dependencies

- Clone the repository and install the dependencies:

npm install - 
Run the development server -
npm run dev

- Open: http://localhost:3000 in your browser.

## Available Commands
- Development:
npm run dev

Starts the development server.

- Type checking:
npx tsc --noEmit

Checks the project for TypeScript errors.

- Linting:
npm run lint

Runs ESLint to check the code for problems.

- Production build:
npm run build

Creates an optimized production build of the application.

- Testing:
Before submitting the project, the following checks were run successfully:

npx tsc --noEmit
npm run lint
npm run build

All three commands complete without errors.

## User Flow

A typical user flow is:

1. Open the shop
2. Browse available products
3. Search for a product or sort the product list
4. Select a product
5. View the product details
6. Add the product to the cart
7. Open the cart
8. Adjust the quantity or remove products
9. Review the order summary
10. Proceed to checkout
11. View the checkout confirmation
12. Continue shopping
- Error Handling

The application includes an error page at:

src/app/error.tsx

This provides a user-friendly message if an unexpected application error occurs and allows the user to try again.

- A loading page is also included at:

src/app/loading.tsx
## Accessibility

- The application includes accessibility considerations 

- The interface uses Tailwind CSS responsive utilities to adapt the layout for; Mobile devices, Tablets and Desktop screens


- The product grid, navigation, product details, cart, and contact form all adapt to different screen sizes.

## Deployment

The application can be deployed using a Next.js-compatible hosting platform. 

- For production, run: npm run build

### Author

Created as part of the Noroff Front-End Development / JavaScript Frameworks coursework.

### License

This project was created for educational purposes.

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.