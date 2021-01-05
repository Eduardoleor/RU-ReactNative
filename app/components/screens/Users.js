import React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  obtainUsersAction,
  obtainUsersActionCount,
  clearUsersAction,
} from '../../redux/userDucks';

function Users() {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users.users);

  const obtainUsers = () => {
    dispatch(obtainUsersAction());
  };

  return (
    <View>
      <Text>Users</Text>
      <Button title="Obtain users" onPress={() => obtainUsers()} />
    </View>
  );
}

export default Users;
