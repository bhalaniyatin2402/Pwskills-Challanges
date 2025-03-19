import { Route, Routes } from "react-router-dom";
import ImageDetails from "../components/ImageDetails/ImageDetails";
import Gallary from "../components/Gallary/Gallary";

function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Gallary />} />
      <Route path="/photo/:id" element={<ImageDetails />} />
    </Routes>
  );
}

export default CustomRoutes;
