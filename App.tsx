import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function App(): React.JSX.Element {

  return (
    <SafeAreaProvider>
      <SafeAreaView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
