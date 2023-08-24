import { useDispatch, useSelector } from "react-redux";
import User from './User';
import { useEffect } from "react";
import { getUsers } from "../store/users/usersSlice";
const Users = () => {
    const { users, isLoading, error } = useSelector((store) => store.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>{ error}</div>
  }

  return (
    <div>
      {users.map((items) => (
          <User
              key={items.login.id}
              firstName={items.name.first}
              lastName={items.name.last}
          />
      ))}
    </div>
  );
};

export default Users;
