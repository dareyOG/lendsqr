import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to={'/users'} className="w-fit">
      <img src="/img/logo.svg" alt="logo" />
    </Link>
  );
}

export default Logo;
