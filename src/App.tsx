import authContext from "./context/AuthenticationContext";
import AppRoutes from "./routes";

const App: React.FC = () => {
  return (
    <authContext.AuthenticationContext>
      <AppRoutes />
    </authContext.AuthenticationContext>
  );
};

export default App;
