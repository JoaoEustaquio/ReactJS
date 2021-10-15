const NomeContext = React.createContext("nome");

function MyComponent1(props) {
  return (
    <div className="component-1">
      <MyComponent2>
        <MyComponent3 onClickIncrementar={props.onClickIncrementar} />
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

function MyComponent3(props) {
  const [telefone, setTelefone] = React.useState("22 123456789");

  setTimeout(function () {
    setTelefone("11 987654321");
  }, 1000);

  return (
    <div className="component-3">
      <MyComponent4 telefone={telefone}  onClickIncrementar={props.onClickIncrementar} />
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
      <p>Component 4 {idade} - {props.telefone}</p>
      <button type="button" onClick={props.onClickIncrementar}>Incrementar</button>
    </div>
  )
}

function MyComponent(props) {
  return (
    <div id="components">
      <MyComponent1 onClickIncrementar={props.onClickIncrementar} />
    </div>
  );
}

function MyComponentIrmao(props) {
  return (
    <div id="component-irmao">
      <MyComponentIrmao2 contador={props.contador} />
    </div>
  )
}

function MyComponentIrmao2(props) {
  return (
    <h2>Contador: { props.contador }</h2>
  )
}

function AppComponent() {
  const [ contador, incrementaContador ] = React.useState(0);

  const clickIncrementa = function() {
    incrementaContador(contador + 1)
  }

  return (
    <React.Fragment>
      <MyComponent onClickIncrementar={clickIncrementa} />
      <MyComponentIrmao contador={contador} />
    </React.Fragment>
  );
}

ReactDOM.render(<AppComponent />, document.getElementById('app'));
