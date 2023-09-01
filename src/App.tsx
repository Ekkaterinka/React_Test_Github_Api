import Users from "./page/Users";
import Details from "./components/Details";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {

  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Users />} />
          <Route path='/:login/details' element={<Details />} />
        </Routes>
      </Provider>
    </>
  )
}

export default App
