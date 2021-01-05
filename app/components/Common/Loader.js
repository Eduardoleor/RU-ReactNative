import React, {useState} from 'react';
import {View, Text, Modal, ActivityIndicator, StyleSheet} from 'react-native';

function Loader() {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        statusBarTranslucent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.centeredView}>
          <ActivityIndicator color="white" size="large" />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(26, 35, 126, 0.7)',
  },
});
export default Loader;
