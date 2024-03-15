import { useRecoilState } from 'recoil';
import ThemeIcon from '@/components/atoms/ThemeIcon/ThemeIcon';
import { themeAtom } from '@/state/atmos/themeAtom';

const ThemeToggle = () => {
  const [theme, setTheme] = useRecoilState(themeAtom);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={toggleTheme}>
      <ThemeIcon theme={theme} />
    </button>
  );
};

export default ThemeToggle;
