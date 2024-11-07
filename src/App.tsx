import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { NavBar } from "./components/component/NavBar";
import BasicDetails from "./pages/RegistrationProfile/personal_details/BasicDetails";
import { Toaster } from "./components/ui/toaster";
import CompanyDetail from "./pages/CompanyDetail";
import CompanyHomePage from "./pages/CompanyHomePage";
import AddressDetails from "./pages/RegistrationProfile/personal_details/AddressDetails";
import ScheduleDrive from "./pages/ScheduleDrive";
import ShowProfile from "./pages/ShowProfile";
import SSC from "./pages/RegistrationProfile/academic_details/SSC";
import HSC from "./pages/RegistrationProfile/academic_details/HSC";
import Diploma from "./pages/RegistrationProfile/academic_details/Diploma";
import BE from "./pages/RegistrationProfile/academic_details/BE";
import MCA from "./pages/RegistrationProfile/academic_details/MCA";
import ME from "./pages/RegistrationProfile/academic_details/ME";
import { StudentLogin } from "./pages/StudentLogin";
import Notice from "./pages/NoticePage";
import AppliedCompanies from "./pages/AppliedCompanies";
import Home from "./pages/MainHomePage/Home";
import PlacementPolicy from "./pages/MainHomePage/PlacementPolicy";
import Contactus from "./pages/MainHomePage/Contactus";
import PastRecruiters from "./pages/MainHomePage/PastRcruiter";
import { ForgetPassword } from "./pages/ForgetPassword";
// import Team from "./pages/MainHomePage/SubComponent/Team";

function App() {
  const [queryClient] = useState(() => new QueryClient());

  function AppContent() {
    const location = useLocation();
    const hideNavbar =
      location.pathname === "/" ||
      location.pathname === "/login" ||
      location.pathname === "/forget-password" ||
      location.pathname === "/register" ||
      location.pathname === "/contactus" ||
      location.pathname === "/placement_policy" ||
      location.pathname === "/pastrecruiters" ||
      location.pathname === "/team";
    return (
      <>
        {!hideNavbar && <NavBar />}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/team" element={<Team />} /> */}
          <Route path="/placement_policy" element={<PlacementPolicy />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/pastrecruiters" element={<PastRecruiters />} />
          <Route path="/companies" element={<CompanyHomePage />} />
          <Route path="/login" element={<StudentLogin />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/applied" element={<AppliedCompanies />} />
          <Route path="/company/:r_id/:consentId" element={<CompanyDetail />} />
          <Route
            path="/applied/:companyId/schedule/:consentId"
            element={<ScheduleDrive />}
          />
          <Route
            path="/applied/:companyId/notice/:consentId"
            element={<Notice />}
          />
          <Route path="/profile" element={<ShowProfile />} />
          <Route path="/profile/basic_details" element={<BasicDetails />} />
          <Route path="/profile/address_details" element={<AddressDetails />} />
          <Route path="/profile/academic_details/ssc" element={<SSC />} />
          <Route path="/profile/academic_details/hsc" element={<HSC />} />
          <Route
            path="/profile/academic_details/diploma"
            element={<Diploma />}
          />
          <Route path="/profile/academic_details/BE" element={<BE />} />
          <Route path="/profile/academic_details/MCA" element={<MCA />} />
          <Route path="/profile/academic_details/ME" element={<ME />} />
        </Routes>
      </>
    );
  }
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Toaster />
          <AppContent />
          <Analytics />
          <SpeedInsights />
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
