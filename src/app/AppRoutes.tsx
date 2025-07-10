import Layout from "@/widgets/layout/Layout";
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Layout/>}>
        </Route>
    </Routes>
);

export default AppRoutes;