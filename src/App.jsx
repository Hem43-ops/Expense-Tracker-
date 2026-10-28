import { useRoutes } from "react-router-dom";
import appRoutes from "./routes/appRoutes";

function App() {
    const routes = useRoutes(appRoutes);
    return routes;
}

export default App;
