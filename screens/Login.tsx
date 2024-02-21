import React from 'react';
import {View} from 'react-native';
// import {VerificationLevel, IDKitWidget} from '@worldcoin/idkit';
// import type {ISuccessResult} from '@worldcoin/idkit';
const Login = () => {
  // const onSuccess = (result: ISuccessResult) => {
  //   console.log(
  //     'Successfully verified with World ID! Your nullifier hash is: ' +
  //       result.nullifier_hash,
  //   );
  // };

  return (
    <View style={{margin: 20}}>
      {/* <IDKitWidget
        action={process.env.NEXT_PUBLIC_WLD_ACTION!}
        app_id={process.env.NEXT_PUBLIC_WLD_APP_ID as `app_${string}`}
        onSuccess={onSuccess}
        verification_level={VerificationLevel.Device}>
        {({open}) => <Button onPress={open} title="Verify with World ID" />}
      </IDKitWidget> */}
    </View>
  );
};

export default Login;
