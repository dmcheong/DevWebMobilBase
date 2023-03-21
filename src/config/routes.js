import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginForm from '../component/LoginForm';
import HomeScreen from '../screens/HomeScreen';
import GamesScreen from '../screens/GamesScreen';
import ArticleScreen from '../screens/ArticleScreen';
import VideoScreen from '../screens/VideoScreen';
import WebviewScreen from '../screens/WebviewScreen';
import OcarinaScreen from '../screens/OcarinaScreen';

const Stack = createNativeStackNavigator();

//annuaire de toutes les pages de l'applicattion par native-stack
const Router= () => {
    return( 
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginForm} /> 
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Accueil' }} />
          <Stack.Screen name="Game" component={GamesScreen} options={{ title: 'Jeux' }}/>
          <Stack.Screen name="Article" component={ArticleScreen} options={{ title: 'Article' }}/>
          <Stack.Screen name="Video" component={VideoScreen} options={{ title: 'Vidéos' }}/> 
          <Stack.Screen name="Webview" component={WebviewScreen} />
          <Stack.Screen name="Ocarina" component={OcarinaScreen} options={{ title: 'Ocarina' }}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default Router;