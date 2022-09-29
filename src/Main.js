import { useMenu } from './MenuContext';

function Main() {
  const {isLoggedIn, login, logout} = useMenu();

  return (
    <main>
      <h1>Welcome to this website</h1>
      {isLoggedIn
        ? <button onClick={logout}>Logout</button>
        : <button onClick={login}>Login</button>}
    </main>
  );
}

export default Main;
