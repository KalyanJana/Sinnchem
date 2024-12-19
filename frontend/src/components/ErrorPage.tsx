// components/ErrorPage.js
const ErrorPage = ({ onRetry }) => {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h2>Something went wrong!</h2>
        <p>Unable to fetch products. Please try again.</p>
        <button onClick={onRetry} style={{ padding: "10px 20px", fontSize: "16px" }}>
          Retry
        </button>
      </div>
    );
  };
  
  export default ErrorPage;
  