This is a Next.js project bootstrapped with create-next-app.

Getting Started
Install dependencies:

``` 
npm install

Build the project:
npm run build

Start the server:
npm run start
```
Open http://localhost:3000 in your browser.

How to Test Offline Behavior
On the Home page, enter any number and navigate to the Doc page.

Open DevTools → Application → Service Workers and check the Offline box to simulate offline mode.

Go back to Home, enter a new number, and you’ll be redirected to the offline Doc page.

Change the number in the URL — it will still load the offline Doc page.

Special Case: Unknown Routes
If you navigate to an unknown route (e.g., /unknown),
it will display a public offline page — not the offline Doc page.
