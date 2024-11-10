import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemeProvider } from '@/presentation/contexts';
import { RootNavigation } from '@/presentation/navigation';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function App(): React.JSX.Element {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ThemeProvider>
          <RootNavigation />
        </ThemeProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App;
