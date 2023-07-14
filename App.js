
const root = ReactDOM.createRoot(document.getElementById("root"));

const head1 = React.createElement(
    "h1",
    {id:"title"},
    "Hi mayuresh Welcome to Namaste React by akshay"
  );
  const head2 = React.createElement(
    "h2",
    {id:"title"},
    "this is cool stuff"
  );
  
  const container = React.createElement("div",{
    id:'container'
  },[head1,head2])
  
  root.render(container);