import { useRouterError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouterError;
  console.error("MJS " + error); 

  return (
    <div id="error-page">
      <h1>Error: The Route does not exist.</h1>
      <h1>Try: /about or /profile/:id.   </h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
} // end funct ErrorPage

export default ErrorPage;
