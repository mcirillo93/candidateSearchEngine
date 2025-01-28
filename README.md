# Candidate Search Engine

A candidate search engine utilizing the GitHub API to find and display potential candidates based on specified criteria.

## Features

- **GitHub API Integration**: Fetches user data from GitHub to identify potential candidates.
- **Search Functionality**: Allows users to search for candidates based on various parameters.
- **User-Friendly Interface**: Provides an intuitive interface for easy navigation and candidate evaluation.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/mcirillo93/candidateSearchEngine.git
   cd candidateSearchEngine
   ```

2. **Install Dependencies**:
   Ensure you have [Node.js](https://nodejs.org/) installed. Then, run:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add your GitHub API credentials:
   ```env
   GITHUB_CLIENT_ID=your_client_id
   GITHUB_CLIENT_SECRET=your_client_secret
   ```

4. **Start the Application**:
   ```bash
   npm start
   ```

   The application will be accessible at `http://localhost:3000`.

## Usage

1. **Search for Candidates**:
   - Enter the desired search criteria in the search bar.
   - The application will display a list of GitHub users matching the criteria.

2. **View Candidate Details**:
   - Click on a candidate's name to view more detailed information, including repositories, contributions, and other relevant data.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/YourFeature`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature/YourFeature`.
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [GitHub API](https://docs.github.com/en/rest) for providing the data.
- All contributors who have helped in developing this project.
