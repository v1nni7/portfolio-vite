import AppRoutes from "./Routes";

import { globalStyles } from "./styles/global/Global";

const App = () => {

  globalStyles();

  return (
    <>
        <AppRoutes />
    </>
  )
}

export default App;