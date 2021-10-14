const NomeContext = React.createContext("nome");

function MyComponent1() {
  const meuNome = "Ayrton Teshima";
  return (
    <div className="component-1">
      <MyComponent2>
        <MyComponent3 />
      </MyComponent2>
    </div>
  );
}

function MyComponent2(props) {
  return (
    <div className="component-2">
      <div>
        <header>{props.children}</header>
        <footer></footer>
      </div>
    </div>
  );
}

function MyComponent3() {
  const [telefone, setTelefone] = React.useState("22 123456789");

  setTimeout(function () {
    setTelefone("11 987654321");
  }, 1000);

  return (
    <div className="component-3">
      <MyComponent4 telefone={telefone} />
    </div>
  );
}

function MyComponent4(props) {
  const [idade, setIdade] = React.useState(28);

  setTimeout(function () {
    setIdade(290);
  }, 1000);

  return (
    <div className="component-4">
      <p>
        Component 4 {idade} - {props.telefone}
      </p>
    </div>
  );
}

function MyComponent() {
  return (
    <div id="components">
      <MyComponent1 />
    </div>
  );
}

ReactDOM.render(<MyComponent />, document.getElementById("app"));
