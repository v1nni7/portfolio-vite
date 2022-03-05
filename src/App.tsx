import AppRoutes from "./Routes";

import { globalStyles } from "./styles/global/global.styles";

const App = () => {

  globalStyles();

  return (
    <>
        <AppRoutes />
    </>
  )
}

export default App;