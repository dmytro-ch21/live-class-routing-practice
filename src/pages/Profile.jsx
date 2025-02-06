import { useParams } from 'react-router';
import Navbar from '../layout/Navbar';
import { people } from '../data/data';

function Profile() {
  const { personId } = useParams();
  // find a specific person .find()
  const person = people.find((p) => p.id === personId);
  return (
    <div className="">
      <Navbar />

      <div className="d-flex flex-column align-items-center">
        <div className="col-6 col-lg-5">
          <h2 className="text-center mt-5">Profile Page</h2>

          <div className="card">
            <img className='card-img-top' src={person.image} alt="" />
            <div className="card-body text-center">
              <div className="card-title fw-bold"> {person.name} - {person.age}</div>
              <div className="card-text">{person.bio}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

<h2>Profile Page</h2>;

export default Profile;
