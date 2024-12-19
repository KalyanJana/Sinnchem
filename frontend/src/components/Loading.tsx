// components/Loading.js
import "./Loading.css"; // Import CSS for styling

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <h2>Loading, please wait...</h2>
    </div>
  );
};

export default Loading;
