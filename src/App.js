import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import TelaMensagens from "./telas/TelaMensagens";
import Tela404 from "./telas/Tela404";
import TelaUsuario from "./telas/TelaUsuario";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/mensagem" element={<TelaMensagens />} />
            <Route path="/usuario" element={<TelaUsuario />} />
            <Route path="/" element={<TelaMensagens />} />
            <Route path="*" element={<Tela404 />} />
          </Routes>
        </BrowserRouter>
      </Provider>
      <ToastContainer />
    </div>
  );
}

export default App;