import { SuiClient } from "@mysten/sui/client"
import { ZKLoginProvider } from "react-sui-zk-login-kit"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Success from "./pages/Success.tsx"
import { Content } from "./Content.tsx"

const FULLNODE_URL = "https://fullnode.devnet.sui.io/"
const suiClient = new SuiClient({ url: FULLNODE_URL })

function App() {
  return (
    <ZKLoginProvider client={suiClient}>
      {/* <Content /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </ZKLoginProvider>
  )
}

export default App
