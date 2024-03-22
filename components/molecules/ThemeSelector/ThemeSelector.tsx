import { useRecoilState } from 'recoil';
// import { originalColors } from '@/styles/themeColorPalette';
import { themeAtom, ThemeMode } from '@/state/atmos/themeAtom';

const ThemeSelector = () => {
  const [theme, setTheme] = useRecoilState(themeAtom);

  const handleThemeChange = (selectedTheme: ThemeMode) => {
    setTheme(selectedTheme);
  };

  return (
    <div>
      <button onClick={() => handleThemeChange('light')}>Light</button>
      <button onClick={() => handleThemeChange('dark')}>Dark</button>
      {/* {originalColors.map((color, index) => (
        <button key={color.name} onClick={() => handleThemeChange(`original${index}` as ThemeMode)}>
          {color.name}
        </button>
      ))} */}
    </div>
  );
};

export default ThemeSelector;
