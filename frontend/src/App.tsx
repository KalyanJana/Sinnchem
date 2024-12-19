import { BrowserRouter } from "react-router-dom";
import { Layout } from "./container/layout/Layout";
import { useEffect, useState } from "react";
import axios from './config/axiosConfig';
import { addProducts } from "./redux/reducer/ProductsReducer";
import { useAppDispatch } from "./redux/hooks";
import Loading from "./components/Loading";
import ErrorPage from "./components/ErrorPage";

function App() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [httpError, setHttpError] = useState(false);

  // const fetchProducts = async () => {
  //   try {
  //     setLoading(true);
  //     setHttpError(false); // Reset error state before retry
  //     const response = await axios.get("/api/v1/products");
  //     setLoading(false);
  //     console.log("products", response.data.products)
  //     dispatch(addProducts(response.data.products));
  //   } catch (error) {
  //     setLoading(false);
  //     setHttpError(true);
  //     console.log("Fetch error:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  const reloadPage = () => {
    window.location.reload();
  };

  if (loading) {
    return <Loading />;
  }

  if (httpError) {
    return <ErrorPage onRetry={fetchProducts} />;
  }

  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
