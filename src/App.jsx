import Customers from "./pages/Customers";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="bg-gray-100">
      <Customers />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
