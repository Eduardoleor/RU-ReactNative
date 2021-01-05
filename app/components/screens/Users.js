import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  obtainUsersAction,
  obtainUsersActionCount,
  clearUsersAction,
} from '../../redux/userDucks';
import Loader from '../Common/Loader';
import functions from '../../functions';

function Users() {
  /* Redux actions */
  const dispatch = useDispatch();
  const totalUsers = useSelector((store) => store.users.total);
  const users = useSelector((store) => store.users.users);
  const loader = useSelector((store) => store.users.load);
  const error = useSelector((store) => store.users.error);
  const empty = functions.isEmpty(users);

  /* Hooks  */
  const [disableButton, setDisableButton] = useState(false);

  /* Functions */
  const obtainUsers = () => {
    dispatch(obtainUsersAction());
    setDisableButton(true);
  };

  const obtainUsersCounter = (number) => {
    let count = number;
    dispatch(obtainUsersActionCount(count));
  };

  const clearUsers = () => {
    dispatch(clearUsersAction());
    setDisableButton(false);
  };

  /* Views */
  const buttons = () => {
    return (
      <View style={styles.viewHorizontal}>
        <Button
          title="Obtain users"
          onPress={() => obtainUsers()}
          disabled={disableButton}
        />
        {!empty && (
          <Button
            color="gray"
            title="Add Users"
            onPress={() => obtainUsersCounter(20)}
          />
        )}
        {!empty && (
          <Button color="red" title="Clear list" onPress={() => clearUsers()} />
        )}
      </View>
    );
  };

  const list = () => {
    return (
      <ScrollView style={styles.viewList}>
        {!empty && (
          <View>
            {users.map((user, index) => (
              <Text key={user.firstname} style={styles.listText}>
                {index} - {user.firstname}
              </Text>
            ))}
          </View>
        )}
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome random user</Text>
      {!empty && (
        <Text style={styles.subtitle}>Total users: {totalUsers} </Text>
      )}
      {buttons()}
      {list()}
      {loader && <Loader />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: StatusBar.currentHeight,
    display: 'flex',
    flex: 1,
  },
  title: {
    fontSize: 25,
    color: '#212121',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    color: '#212121',
  },
  viewHorizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
  },
  viewList: {
    marginTop: 20,
  },
  listText: {
    marginTop: 3,
    marginBottom: 3,
    fontSize: 17,
  },
});
export default Users;
