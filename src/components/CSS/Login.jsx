import "./Login.css";

import Label from "./Label.jsx";
import LabelTitle from "./LabelTitle.jsx";
import Button from "./Button.jsx";
import InputText from "./InputText.jsx";
import InputPassword from "./InputPassword.jsx";

function Login() {
  return (
    <div className="login-container">
      <form className="login-form">
        <LabelTitle texto="Cadastro de Pessoa Fisica" />

        <div className="form-group">
          <Label texto="Nome:" />
          <InputText placeholder="user..." />
        </div>
        <div className="form-group">
          <Label texto="CPF:" />
          <InputText placeholder="user..." />
        </div>

        <div className="form-group">
          <Label texto="Email:" />
          <InputText placeholder="user..." />
        </div>
        <div className="form-group">
          <Label texto="Endereço:" />
          <InputText placeholder="user..." />
        </div>
        <div className="form-group">
          <Label texto="Título:" />
          <InputText placeholder="user..." />
        </div>
      <div className="form-group">
          <Label texto="Telefone:" />
          <InputPassword placeholder="number..." />
        </div>

        <Button valor="Logar" />
      </form>
    </div>
  );
}

export default Login;