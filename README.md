# Tim Blog v2

Tim Blog v2 is a single page blog application built with Vue 3. It uses the Element Plus UI library and Typed.js to create an interactive user experience. Article content is loaded from a remote API.

## Requirements

- Node.js 14 or higher
- npm

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run serve
   ```
   The application will be available at `http://localhost:8080/`.

## Production Build

Generate an optimized build in the `dist/` directory:
```bash
npm run build
```
Use the files in `dist/` for deployment.

## Code Linting

Run ESLint on the project:
```bash
npm run lint
```

## Project Structure

- `src/main.js` – Application entry that sets up Vue Router and Element Plus.
- `src/router.js` – Configures routes for the home page, articles, links and products.
- `src/components/` – Reusable Vue components, such as the typing effect header.
- `src/pages/` – Main pages including the home page, article details, link page and products.
- `src/utils/` – Helper utilities for loading article content.
- `src/assets/styles/` – Global theme and CSS variables.

## Key Features

- **Home page** – Loads articles from a remote API and displays them in a Masonry layout.
- **Article detail** – Uses a SHA256 hash of the title as the route and renders Markdown content.
- **Links page** – Shows contact methods with one‑click copy support.
- **Products page** – Displays products fetched from the API with external links.
- **Custom theme** – Colors can be adjusted in `global.css` to match your style.
- **Responsive layout** – Mobile and desktop layouts use different breakpoints for the best experience.

## Customization

- Modify `src/utils/articles-loader.js` to change the article API endpoint.
- Edit `src/assets/styles/global.css` for custom colors or fonts.

## License

This project is licensed under the MIT License.
