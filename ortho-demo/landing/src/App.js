import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "@/pages/Landing";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/Ortho-Community">
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        theme="dark"
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#141414",
            border: "1px solid #27272a",
            color: "#f4f4f4",
            fontFamily: "JetBrains Mono, monospace",
            borderRadius: 0,
          },
        }}
      />
    </div>
  );
}

export default App;
