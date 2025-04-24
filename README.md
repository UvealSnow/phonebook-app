# Phonebook API

This project is a simple contact management application built using Node.js and Express. It allows users to retrieve and create contacts through a RESTful API.

## How to Run the Project

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies**:
   Make sure you have Node.js installed. Then run:
   ```bash
   npm install
   // or
   pnpm i
   ```

3. **Run the application**:
   Start the server using Node.js:
   ```bash
   // starts in dev mode, with watcher
   npm run dev // or pnpm dev
   // "prod" mode
   npm run start // pnpm start
   ```

4. **Access the application**:
   Open your browser and navigate to `http://localhost:3000/static` to see the list of contacts.

## Next Steps

- [ ] Explore the codebase to understand how the API is structured.
- [ ] Implement the UI in Vanilla JS.
- [ ] Implement additional features such as updating and deleting contacts by completing the commented-out `app.put(...)` and `app.delete(...)` routes in `src/index.js`.
- [ ] Dockerize
- [ ] Add a database
- [ ] Deploy the application to AWS
- [ ] TypeScript?
- [ ] Rewrite the UI in React/Vue/Svelte - keeping each available.

Feel free to contribute by submitting issues or pull requests!
