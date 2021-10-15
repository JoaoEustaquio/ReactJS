const NomeContext = React.createContext("nome");

function MyComponent1(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "component-1"
  }, /*#__PURE__*/React.createElement(MyComponent2, null, /*#__PURE__*/React.createElement(MyComponent3, {
    onClickIncrementar: props.onClickIncrementar
  })));
}

function MyComponent2(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "component-2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("header", null, props.children), /*#__PURE__*/React.createElement("footer", null)));
}

function MyComponent3(props) {
  const [telefone, setTelefone] = React.useState("22 123456789");
  setTimeout(function () {
    setTelefone("11 987654321");
  }, 1000);
  return /*#__PURE__*/React.createElement("div", {
    className: "component-3"
  }, /*#__PURE__*/React.createElement(MyComponent4, {
    telefone: telefone,
    onClickIncrementar: props.onClickIncrementar
  }));
}

function MyComponent4(props) {
  const [idade, setIdade] = React.useState(28);
  setTimeout(function () {
    setIdade(290);
  }, 1000);
  return /*#__PURE__*/React.createElement("div", {
    className: "component-4"
  }, /*#__PURE__*/React.createElement("p", null, "Component 4 ", idade, " - ", props.telefone), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: props.onClickIncrementar
  }, "Incrementar"));
}

function MyComponent(props) {
  return /*#__PURE__*/React.createElement("div", {
    id: "components"
  }, /*#__PURE__*/React.createElement(MyComponent1, {
    onClickIncrementar: props.onClickIncrementar
  }));
}

function MyComponentIrmao(props) {
  return /*#__PURE__*/React.createElement("div", {
    id: "component-irmao"
  }, /*#__PURE__*/React.createElement(MyComponentIrmao2, {
    contador: props.contador
  }));
}

function MyComponentIrmao2(props) {
  return /*#__PURE__*/React.createElement("h2", null, "Contador: ", props.contador);
}

function AppComponent() {
  const [contador, incrementaContador] = React.useState(0);

  const clickIncrementa = function () {
    incrementaContador(contador + 1);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MyComponent, {
    onClickIncrementar: clickIncrementa
  }), /*#__PURE__*/React.createElement(MyComponentIrmao, {
    contador: contador
  }));
}

ReactDOM.render( /*#__PURE__*/React.createElement(AppComponent, null), document.getElementById('app'));
