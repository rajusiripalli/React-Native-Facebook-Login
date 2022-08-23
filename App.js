import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {LoginManager} from 'react-native-fbsdk-next';

const App = () => {
  const handleFacebookLogin = () => {
    LoginManager.logInWithPermissions(['public_profile']).then(
      function (result) {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          console.log(
            'Login success with permissions: ' +
              result.grantedPermissions.toString(),
          );
        }
      },
      function (error) {
        console.log('Login fail with error: ' + error);
      },
    );
  };
  return (
    <View style={styles.container}>
      <Button
        onPress={() => handleFacebookLogin()}
        title="Continue with fb"
        color="#4267B2"
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
