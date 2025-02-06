import Navbar from '../layout/Navbar';
import { people } from '../data/data';
import { Link, Outlet } from 'react-router';

function Home() {
  console.log(people);
  return (
    <>
      <div className="mt-5 text-center d-flex flex-column align-items-center">
        <h1>Home Page</h1>

        <ul className="list-group col-6 gap-2 ">
          {people.map((person) => (
            <li
              key={person.id}
              className="list-group-item border border-1 border-primary"
            >
              <div>{person.name}</div>
              {/* Why the person.id is treated as a string */}
              <Link to={'/home/' + person.id}>View Profile</Link>
            </li>
          ))}
        </ul>
        <Outlet/>
      </div>
    </>
  );
}

export default Home;
