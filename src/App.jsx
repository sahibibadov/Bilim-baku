import { Layout } from "./components";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  News,
  Contact,
  Newsinfo,
  ContactIndex,
  Register,
  Branches,
  Labsindex,
  LabTex,
  LabRiy,
  LabAstro,
  LabInce,
  LabSah,
  Labteb,
  Labs,
} from "./pages";
import { NewsPages } from "./components";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="news" element={<News />}>
          <Route index element={<NewsPages />} />
          <Route path=":slag" element={<Newsinfo />} />
        </Route>

        <Route path="contact" element={<Contact />}>
          <Route index element={<ContactIndex />} />
          <Route path=":slag" element={<Register />} />
        </Route>

        <Route path="labs" element={<Labs />}>
          <Route index element={<Labsindex />} />
          <Route path="tebiet-merkez" element={<Labteb />} />
          <Route path="astronomiya-merkezi" element={<LabAstro />} />
          <Route path="texnologiya-merkez" element={<LabTex />} />
          <Route path="incesenet-merkezi" element={<LabInce />} />
          <Route path="riyaziyyat-merkezi" element={<LabRiy />} />
          <Route path="sahibkarliq-merkezi" element={<LabSah />} />
        </Route>

        <Route path="branches" element={<Branches />} />
      </Routes>
    </Layout>
  );
}

export default App;
