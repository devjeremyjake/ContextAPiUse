import ThemeProviderContext from './context/ThemeContext';
import MainPage from './Screens/MainPage';

export default function App() {
	return (
		<ThemeProviderContext>
			<MainPage />
		</ThemeProviderContext>
	);
}
