import { type PropsWithChildren } from 'react';

/**
 * This file is web-only and used to configure the root HTML for every web page during static rendering.
 * The contents of this function only run in Node.js environments and do not have access to the DOM or browser APIs.
 */
export default function Root({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        
        {/* Using raw CSS styles to change the background color and ensure button styling */}
        <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
      </head>
      <body>
        {/* Welcome Message */}
        <h1 className="welcome-message">Welcome to PI RIDE</h1>

        {/* Render the children components */}
        {children}
      </body>
    </html>
  );
}

const responsiveStyles = `
body {
  background-color: #6a0dad; /* Set background color to purple */
  color: white; /* Set text color to white */
  font-family: Arial, sans-serif;
}

h1.welcome-message {
  text-align: center;
  color: white;
  margin-top: 50px;
}

button {
  background-color: white; /* Set button background to white */
  color: #6a0dad; /* Set button text color to purple */
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #f0f0f0; /* Button hover effect */
}
`;
