import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to={'/'} className="w-fit">
      <img src="/img/logo.svg" alt="logo" className="px-[3rem] py-[3.5rem]" />
    </Link>
  );
}

export default Logo;
