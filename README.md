# Worldcoin Token Transaction Registry

A frontend application for real-time tracking of all Worldcoin token transactions. This project leverages The Graph for querying on-chain data and presents the data in a user-friendly interface with a dynamic slideshow view.
[![Netlify Status](https://api.netlify.com/api/v1/badges/c56ce479-e019-467b-ac14-3eff363d834c/deploy-status)](https://app.netlify.com/sites/wld-explorer/deploys)
## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Step-by-Step Guide](#step-by-step-guide)
  - [Step 1: Register for The Graph Studio](#step-1-register-for-the-graph-studio)
  - [Step 2: Set Up the Repository](#step-2-set-up-the-repository)
  - [Step 3: Run the Application](#step-3-run-the-application)
- [Usage](#usage)
- [License](#license)

## Introduction
This project enables users to search and view Worldcoin token transactions by connecting to The Graph API. Users can search for specific transactions by wallet address or transaction hash, navigate through transaction data, and copy relevant information for easy sharing.

## Features
- **Real-Time Data Fetching**: Fetches the latest Worldcoin transaction data using The Graph API.
- **Search Functionality**: Search for specific transactions by wallet address or transaction hash.
- **Dynamic Slideshow**: Display transactions as slides that users can easily navigate.
- **Copy to Clipboard**: Easily copy transaction details for quick sharing.

## Technologies Used
- **HTML/CSS**: Structuring and styling the UI.
- **JavaScript**: Adding interactivity to the webpage.
- **Tailwind CSS**: Fast and responsive styling.
- **Font Awesome**: Providing icons used in the UI.
- **The Graph**: Fetching blockchain data related to Worldcoin transactions.

## Step-by-Step Guide

### Step 1: Register for The Graph Studio
1. **Create an Account**: 
   - Visit [The Graph Studio](https://thegraph.com/studio/) and click on **Sign Up** to create an account.
   - Verify your email address and complete your profile.

2. **Create a Subgraph**:
   - Once logged in, click on **Create a Subgraph**.
   - Provide necessary details, such as the name of the subgraph and the Ethereum network you will use.
   - Set up your subgraph's schema to query for `transfers`, including the required fields like `id`, `from`, `to`, `value`, `transactionHash`, `blockTimestamp`, and `blockNumber`.

3. **Deploy the Subgraph**:
   - Once the schema is configured, deploy the subgraph.
   - You will receive a GraphQL endpoint URL, which will be used in the application to query data.

### Step 2: Set Up the Repository
1. **Clone the Repository**:
   - Clone this repository to your local machine using the following command:
     ```sh
     git clone <repository-url>
     ```
   - Replace `<repository-url>` with the URL of your GitHub repository.

2. **Configure the Application**:
   - Navigate to the project directory:
     ```sh
     cd worldcoin-token-transaction-registry
     ```
   - In the JavaScript code, replace the `apiUrl` with the GraphQL endpoint URL provided by The Graph Studio. The endpoint will look something like this:
     ```javascript
     const apiUrl = 'https://api.studio.thegraph.com/query/90222/wld_explorer/version/latest';
     ```

### Step 3: Run the Application
1. **Open the HTML File**:
   - Open the `index.html` file in your web browser to run the application.
   - The application will automatically connect to The Graph API to fetch and display Worldcoin transaction data.

## Usage
1. **Search Transactions**: Enter a transaction hash or wallet address in the search bar and click the "Search" button to fetch data.
2. **Navigate through Transactions**: Use the "First", "Previous", "Next", and "Last" buttons to navigate through the fetched transactions.
3. **Copy Details**: Click the "Copy" button next to any detail (e.g., `from` address, `to` address) to copy it to your clipboard.

## License
This project is open source and available under the [MIT License](LICENSE).

---

Feel free to contribute to the project by reporting issues or creating pull requests.
