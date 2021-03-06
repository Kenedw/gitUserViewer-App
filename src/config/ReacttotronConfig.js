import Reacttotron, { overlay } from 'reactotron-react-native';
import { AsyncStorage } from 'react-native';

if (__DEV__) {
  const tron = Reacttotron.configure({
    name: 'MyApp',
    host: '192.168.25.145',
  })
    .useReactNative()
    .setAsyncStorageHandler(AsyncStorage)
    .use(overlay())
    .connect();

  console.tron = tron;

  tron.clear();
}
