import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to={'/'} className="w-fit">
      <img src="/img/logo.svg" alt="logo" className="" />
    </Link>
  );
}

export default Logo;
