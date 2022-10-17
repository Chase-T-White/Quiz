import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section>
      <div className='container center'>
        <h1 className='error__msg'>Oops! Page does not exist...</h1>
        <Link to={"/"} className='btn'>
          Home
        </Link>
      </div>
    </section>
  );
};

export default Error;
