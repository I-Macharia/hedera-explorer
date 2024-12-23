# Hedera Explorer

Hedera Explorer is a comprehensive tool designed to interact with and explore the Hedera network. The project aims to simplify access to the network's operations, enhance transparency, and empower users with insights into account activities, transactions, and more.

## Features

- **Learn HTS:** Learn what the Hedera Token Service is and how to create tokens. 
- ** Token Tracking:** View Tokens on the Hedera network.
- **Transaction Tracking:** View details of transactions on the Hedera network. [Coming soon]
- **Account Management:** Retrieve information about Hedera accounts. [Coming soon]
- **Network Insights:** Get statistics and updates about the Hedera network. [Coming soon]
- **Custom Queries:** Run specific queries to interact with the Hedera network. [Coming soon]

## Technologies Used

- **Backend:** [Node.js](https://nodejs.org/) with [Express](https://expressjs.com/)
  - **Node.js:** Chosen for its asynchronous, event-driven architecture, which ensures scalability and efficient handling of network requests.
  - **Express:** Simplifies building APIs and integrates seamlessly with the Hedera SDK, making backend development faster and more organized.
- **Frontend:** [React](https://reactjs.org/)
- **Hedera SDK:** [Hedera JavaScript SDK](https://hedera.com/)

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (v14 or higher)
- npm or yarn (latest version)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/I-Macharia/hedera-explorer.git
   ```

2. Navigate to the project directory:
   ```bash
   cd hedera-explorer
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables:
   Create a `.env` file in the root directory with the following keys:
   ```env
   HEDERA_NETWORK=testnet
   HEDERA_OPERATOR_ID=your-account-id
   HEDERA_OPERATOR_KEY=your-private-key
   PORT=3000
   ```

### Running the Application

#### Backend

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Start the server:
   ```bash
   npm start
   ```

#### Frontend

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Usage

- **View Transactions:** Enter a transaction ID to get details about the transaction.
- **Check Account Information:** Provide an account ID to retrieve its information.
- **Monitor Network Stats:** Access real-time network updates and statistics.

## Contributing

Contributions are welcome! Follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For questions or suggestions, reach out to:

- **Maintainer:** [I-Macharia](https://github.com/I-Macharia)
- **Email:** Macharia.gichoya@gmail.com

---

Happy exploring with Hedera Explorer!
