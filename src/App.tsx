import { Route, Routes } from "react-router-dom";
import HomeLayout from "./HomeLayout";
import UserLayout from "./UserLayout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<HomeLayout />} />
        <Route path="/admin/*" element={<UserLayout />} />
      </Routes>
    </>
  );
};

export default App;
