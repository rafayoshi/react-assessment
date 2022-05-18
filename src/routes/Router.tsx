import { Route, BrowserRouter, Routes } from "react-router-dom";
import CompanyList from "../pages/CompanyList/CompanyList";
import Company from "../pages/Company/Company";
import PhoneNumber from "../pages/PhoneNumber/PhoneNumber";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CompanyList />} />
                <Route path="/company/:companyId" element={<Company />} />
                <Route path="/number/:numberId" element={<PhoneNumber />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;