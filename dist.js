const NomeContext = React.createContext("nome");

function MyComponent1() {
  const meuNome = "Ayrton Teshima";
  return /*#__PURE__*/React.createElement("div", {
    className: "component-1"
  }, /*#__PURE__*/React.createElement(MyComponent2, null, /*#__PURE__*/React.createElement(MyComponent3, null)));
}

function MyComponent2(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "component-2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("header", null, props.children), /*#__PURE__*/React.createElement("footer", null)));
}

function MyComponent3() {
  const [telefone, setTelefone] = React.useState("22 123456789");
  setTimeout(function () {
    setTelefone("11 987654321");
  }, 1000);
  return /*#__PURE__*/React.createElement("div", {
    className: "component-3"
  }, /*#__PURE__*/React.createElement(MyComponent4, {
    telefone: telefone
  }));
}

function MyComponent4(props) {
  const [idade, setIdade] = React.useState(28);
  setTimeout(function () {
    setIdade(290);
  }, 1000);
  return /*#__PURE__*/React.createElement("div", {
    className: "component-4"
  }, /*#__PURE__*/React.createElement("p", null, "Component 4 ", idade, " - ", props.telefone));
}

function MyComponent() {
  return /*#__PURE__*/React.createElement("div", {
    id: "components"
  }, /*#__PURE__*/React.createElement(MyComponent1, null));
}

ReactDOM.render( /*#__PURE__*/React.createElement(MyComponent, null), document.getElementById("app"));
