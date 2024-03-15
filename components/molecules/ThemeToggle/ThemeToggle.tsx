import { useRecoilState, useRecoilValue } from 'recoil';
import ThemeIcon from '@/components/atoms/ThemeIcon/ThemeIcon';
import { themeAtom } from '@/state/atmos/themeAtom';
import { currentThemeColorsSelector } from '@/state/selectors/currentThemeColorsSelector';


const ThemeToggle = () => {
  const [theme, setTheme] = useRecoilState(themeAtom);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const themeColors = useRecoilValue(currentThemeColorsSelector);

  return (
    <div>
      <button onClick={toggleTheme}>
        <ThemeIcon theme={theme} />
      </button>
      <button onClick={() => toggleOtherThemes('original')}>オリジナルテーマに切り替え</button>
      <button onClick={() => toggleOtherThemes('trendy1')}>トレンディ1に切り替え</button>
    </div>
  );
};



export default ThemeToggle;
