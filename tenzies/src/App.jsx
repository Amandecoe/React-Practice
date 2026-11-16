import { Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing"
import Game from "./pages/Game"
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/play" element={<Game />} />
    </Routes>
  )
}
