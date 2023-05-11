import React ,{useEffect}from 'react'
import { useSelector } from 'react-redux'
import { addUser, deleteUser, selectUsers } from '../redux/formSlice';
import { useAppDispatch } from '../store';
import { Link, useNavigate, useParams } from 'react-router-dom';
type RemoveUserHandler = (id: number) => void;

const Home = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const users = useSelector(selectUsers);
  // const isLoading = useSelector(selectUserLoading);

  useEffect(() => {
    // dispatch(addUser());
  }, [dispatch]);

  // console.log(users);

  

  const handleRemoveUser: RemoveUserHandler = (id) => {
    dispatch(deleteUser(id));
  }
  return (
    <div className='m-5'>
      {users.length == 0  ? (
      <button onClick={() =>navigate('/form')} className="bg-blue-500 bg-gray-700 text-white font-bold py-2 px-4 rounded">Create contact</button>
      ) : (   
  
  
       users.map((user) => (
         <div key={user.id}>
          
         
          <h3> FirstName: {user.firstName}</h3>
          <h3>Lastname: {user.lastName}</h3>
          <h3> Status : {user.status}</h3>
          <Link to={`edit/${user.id}`}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">
           Edit
            </button>
              </Link>
              <Link to={''}>
          <button  onClick={() => handleRemoveUser(user.id)} className="bg-blue-500 bg-red-700 text-white font-bold py-2 px-4 rounded">
           Delete
            </button>
              </Link>
        </div>
      ))
       )}
    </div>
  )
}

export default Home