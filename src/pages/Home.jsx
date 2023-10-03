import { ContactList } from 'components/ContactList';
import { useSelector } from 'react-redux';
import { selectLoggedIn } from 'redux/auth/selectors';

const Home = () => {
  const isLoggedIn = useSelector(selectLoggedIn);

  return (
    <main className="main">
      {isLoggedIn === false && (
        <h1 className="home-header">
          Welcome to the Contact book! Please log in or sign up
        </h1>
      )}
      {isLoggedIn === true && <ContactList />}
    </main>
  );
};

export default Home;
