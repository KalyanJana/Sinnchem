const Loading = () => {
  const styles = {
    loadingContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f8f9fa",
      color: "#495057",
      fontFamily: "Arial, sans-serif",
    },
    spinner: {
      width: "50px",
      height: "50px",
      border: "6px solid #f3f3f3", // Light gray
      borderTop: "6px solid #007bff", // Blue
      borderRadius: "50%",
      animation: "spin 1s linear infinite",
      marginBottom: "20px",
    },
    heading: {
      fontSize: "1.5rem",
      margin: "0",
    },
    // Keyframes for animation
    "@keyframes spin": {
      from: {
        transform: "rotate(0deg)",
      },
      to: {
        transform: "rotate(360deg)",
      },
    },
  };

  return (
    <div style={styles.loadingContainer}>
      <div style={styles.spinner}></div>
      <h2 style={styles.heading}>Loading, please wait...</h2>
      <style>
        {`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Loading;
