# Shopify Base Theme

A custom Shopify theme built from scratch with a modern development workflow.

## Features

- **Webpack:** Asset bundling and processing for JavaScript and CSS.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **PostCSS:** A tool for transforming CSS with JavaScript plugins.
- **Babel:** A JavaScript compiler for using next-generation JavaScript today.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/)
- [Shopify CLI](https://shopify.dev/docs/cli)

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd shopify-base-theme
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

## Usage

### Development

To watch for changes in your source files and automatically recompile them, run the following command:

```bash
npm run watch
```

This will start Webpack in development mode with watch enabled.

### Production

To build and minify your assets for production, run the following command:

```bash
npm run build
```

This will generate optimized `main.js` and `base.css` files in the `assets` directory.

## Shopify CLI Commands

This theme is integrated with Shopify CLI to streamline the development and deployment process.

- **`npm run pull`**: Pulls the theme files from your Shopify store.
- **`npm run push`**: Pushes your local theme files to your Shopify store.
- **`npm run dev`**: Starts a local development server for your theme.

**Note:** You may need to configure the `package.json` with your store name for these commands to work correctly.
