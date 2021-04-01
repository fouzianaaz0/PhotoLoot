import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import {useDispatch, useSelector} from 'react-redux';
import {updateCurrentPassword , updateConfirmNewPassword} from '../../modules/ChangePassword/action';

const ChangePasswordScreen = props => {
  const dispatch = useDispatch();
  const ChangePasswordReducer = useSelector(state => {
    return state.ChangePasswordReducer;
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Header}>
        <View style={styles.HeaderStyle}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('SettingScreen')}>
            <Image
              style={styles.Icon}
              source={require('../../assets/img/arrow.png')}
            />
          </TouchableOpacity>
          <Text style={styles.HeaderText}>Change Password</Text>
        </View>
      </View>
      <View>
        <CustomTextInput
          placeholder="Old Password"
          value={ChangePasswordReducer.currentPass}
          onChangeText={currentPassword => dispatch(updateCurrentPassword(currentPassword))}
        />
        <CustomTextInput
          placeholder="New Password"
          isPasswordEnable="true"
          value={ChangePasswordReducer.confirmPass}
          onChangeText={confirmPassword => dispatch(updateConfirmNewPassword(confirmPassword))}
        />
        <CustomButton title="Update" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Header: {
    width: 400,
    height: 64,
    backgroundColor: '#ff9803',
  },
  HeaderText: {
    fontSize: 20,
    fontWeight: '600',
    fontStyle: 'normal',
    marginTop: 25,
    color: 'white',
    marginLeft: 80,
  },
  HeaderStyle: {
    flexDirection: 'row',
  },
  Icon: {
    marginTop: 25,
    height: 25,
    width: 25,
    marginLeft: 15,
  },
});

export default ChangePasswordScreen;
