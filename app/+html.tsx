import { ScrollViewStyleReset } from 'expo-router/html';
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

        {/*
          Disable body scrolling on web. This makes ScrollView components work closer to how they do on native.
          However, body scrolling is often nice to have for mobile web. If you want to enable it, remove this line.
        */}
        <ScrollViewStyleReset />

        {/* Using raw CSS styles as an escape-hatch to ensure the background color never flickers in dark-mode. */}
        <style dangerouslySetInnerHTML={{ __html: responsiveBackground }} />
        {/* Add any additional <head> elements that you want globally available on web... */}
      </head>
      <body>
        {/* Welcome Message */}
        <h1 style={{ textAlign: 'center', color: '#fff', paddingTop: '20px' }}>Welcome to Taxi Pi</h1>
        {children}
      </body>
    </html>
  );
}

const responsiveBackground = `
body {
  background-color: #6a0dad; /* Purple background */
  color: #fff; /* White text by default */
}

button {
  background-color: white;
  color: #000; /* Black text for the buttons */
  border: 1px solid #ccc;
}

@media (prefers-color-scheme: dark) {
  body {
    background-color: #4b0082; /* Darker purple for dark mode */
  }
  button {
    background-color: white;
    color: #000;
  }
}
`;
