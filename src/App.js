import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Details from "./components/Details";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useState } from "react";
import ThemeContext from "./utils/ThemeContext";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
  },
  {
    path: "/:id",
    element: <Details />,
  },
]);

function App() {
  const [theme, setTheme] = useState(true);

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        setTheme: setTheme,
      }}
    >
      <div className={theme ? "bg-white App" : "bg-gray-700 App"}>
        <Header />
        <RouterProvider router={appRouter}></RouterProvider>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
