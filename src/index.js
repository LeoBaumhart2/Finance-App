import { createRoot, CreateRoot} from "react-dom/client";
import App from "./App";

const root = createRoot(document.querySelector("#root"))

root.render(<App />)