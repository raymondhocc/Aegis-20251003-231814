# Aegis Prime

A minimalist and modern general insurance administration system for managing policies, claims, and clients with exceptional visual design.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/raymondhocc/Aegis-20251003-231814)

Aegis Prime is a sophisticated, minimalist, and visually stunning General Insurance Administration System designed for the modern insurance professional. It provides a comprehensive suite of tools to manage the entire insurance lifecycle, from client onboarding and policy issuance to claims processing and reporting. The application is built on a flexible architecture that accommodates various insurance classes including Motor, Fire, Marine Cargo, Employee Compensation, Travel, and Medical. The user interface prioritizes clarity, efficiency, and a delightful user experience, transforming complex administrative tasks into a seamless and intuitive workflow.

## Table of Contents

- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Development](#development)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Key Features

- **Centralized Dashboard**: Get a high-level overview of key metrics, recent activities, and quick access to major functions.
- **Policy Management**: A comprehensive module to create, search, filter, and manage all insurance policies.
- **Claims Processing**: A dedicated view for logging and tracking claims with clear status indicators.
- **Client Relationship Management**: Easily manage client information, view their associated policies, and track their history.
- **Modern & Minimalist UI**: A clean, spacious, and visually stunning interface built with Tailwind CSS and shadcn/ui.
- **Responsive Design**: Flawless user experience across all devices, from mobile phones to large desktops.
- **Serverless Architecture**: Built on the Cloudflare stack, ensuring high performance, scalability, and reliability.

## Technology Stack

- **Frontend**: React, Vite, React Router, Tailwind CSS
- **UI Components**: shadcn/ui, Lucide React, Framer Motion
- **State Management**: Zustand
- **Forms**: React Hook Form with Zod for validation
- **Backend**: Hono on Cloudflare Workers
- **Data Persistence**: Cloudflare Durable Objects
- **Language**: TypeScript (end-to-end type safety)
- **Runtime**: Bun

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Bun](https://bun.sh/) installed on your machine.
- A [Cloudflare account](https://dash.cloudflare.com/sign-up).
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) installed and authenticated.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/aegis_prime.git
    cd aegis_prime
    ```

2.  **Install dependencies:**
    This project uses Bun for package management.
    ```sh
    bun install
    ```

## Development

To start the local development server for both the frontend and the worker, run:

```sh
bun dev
```

This will start the Vite development server for the React frontend and a local Wrangler server for the Hono backend, enabling live-reloading for a seamless development experience. The application will be accessible at `http://localhost:3000`.

## Deployment

This project is configured for one-click deployment to Cloudflare Pages and Workers.

1.  **Build the project:**
    This command bundles the frontend application and the worker for production.
    ```sh
    bun run build
    ```

2.  **Deploy to Cloudflare:**
    Run the deploy script to publish your application.
    ```sh
    bun run deploy
    ```

Alternatively, you can deploy directly from your GitHub repository.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/raymondhocc/Aegis-20251003-231814)

## Project Structure

The codebase is organized into three main directories:

-   `src/`: Contains the frontend React application, including pages, components, hooks, and styles.
-   `worker/`: Contains the Hono backend code that runs on Cloudflare Workers, including API routes and Durable Object entity definitions.
-   `shared/`: Contains shared code, primarily TypeScript types, used by both the frontend and the backend to ensure type safety.

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.