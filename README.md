# Tim Blog v2

Tim Blog v2 is a single page blog application built with **Vue 3**. It uses **Element Plus** as the UI library and **Typed.js** for typing animations. All article data and page content are loaded from a remote API. The site is responsive and provides separate layouts for desktop and mobile.

## Requirements
- Node.js 14 or higher
- npm

## Installation and Development
1. Install the dependencies:
   ```bash
   npm install
   ```
2. Start a local development server:
   ```bash
   npm run serve
   ```
   The app will run on `http://localhost:8080/` by default.

## Building for Production
Generate a production build in the `dist/` folder:
```bash
npm run build
```
The generated files can be deployed to any static hosting service.

## Code Linting
This project uses ESLint to keep a consistent code style. To run the linter:
```bash
npm run lint
```

## Project Structure
- **src/main.js** – entry point that sets up Vue Router and Element Plus.
- **src/router.js** – defines routes for the home page, article details, links and products pages.
- **src/components/** – reusable Vue components such as the typing effect header.
- **src/pages/** – main pages including `Home`, `ArticlePage`, `Links`, and `Products`.
- **src/utils/** – helper functions for loading articles from the API.
- **src/assets/styles/** – global theme settings stored in `global.css`.

## Key Features
- **Home Page** – loads articles from a cloud function and displays them in a Masonry layout.
- **Article Details** – routes are generated from the SHA256 hash of each article title and Markdown content is rendered dynamically.
- **Links Page** – lists contact information retrieved from an API and supports copying text with a single click.
- **Products Page** – shows product links obtained from the API.
- **Theme Customization** – update colors or global styles in `src/assets/styles/global.css`.
- **Responsive Layout** – supports desktop and mobile with collapsible menus and adaptive columns.

## Customization
- To change the article source, modify the API endpoint in `src/utils/articles-loader.js`.
- Adjust color scheme or layout by editing `src/assets/styles/global.css`.

## License
This project is released under the [MIT License](LICENSE).
