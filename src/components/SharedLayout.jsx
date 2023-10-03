import { Link, Outlet } from 'react-router-dom';
import { Suspense, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectEmail, selectLoggedIn, selectToken } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';

const SharedLayout = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectLoggedIn);
  const email = useSelector(selectEmail);
  const token = useSelector(selectToken);
  // const registerBtn = useRef();
  // const loginBtn = useRef();

  const handleLogout = () => {
    dispatch(logOut(token));
  };

  // const makeRegBtnActive = () => {
  //   console.log(registerBtn.classList);
  //   registerBtn.classList.add = 'active';
  // };

  return (
    <>
      <header className="page-header">
        <nav className="nav">
          <div className="pages-nav">
            <Link className="link" to="/">
              Home
            </Link>
          </div>
          {isLoggedIn === false && (
            <div className="login-nav">
              <Link className="link" to="/register">
                Register
              </Link>
              <Link className="link" to="/login">
                Login
              </Link>
            </div>
          )}
          {isLoggedIn === true && (
            <div className="login-nav">
              <p className="nav-email">{email}</p>
              <button className="logout-button button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </nav>
      </header>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
