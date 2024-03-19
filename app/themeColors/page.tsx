'use client'

import { useState } from "react";
import { useRecoilState } from "recoil";
import { ThemeMode, customThemeColorsAtom, themeAtom } from "@/state/atmos/themeAtom";

const ThemeColors = () => {
  const [, setTheme] = useRecoilState(themeAtom);
  const [customColors, setCustomColors] = useRecoilState(customThemeColorsAtom);
  const [editingThemeIndex, setEditingThemeIndex] = useState<number | null>(null);

  const handleThemeChange = (selectedTheme: ThemeMode) => {
    setTheme(selectedTheme);
  };

  const handleColorChange = (themeIndex: number, colorKey: string, colorValue: string) => {
    setCustomColors((prevColors) => {
      const newColors = [...prevColors];
      newColors[themeIndex] = { ...newColors[themeIndex], [colorKey]: colorValue };
      return newColors;
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">カスタムテーマ選択</h1>
      <div className="grid grid-cols-2 gap-4">
        {customColors.map((theme, index) => (
          <div
            key={`custom${index}`}
            className="p-4 rounded cursor-pointer"
            onClick={() => handleThemeChange(`custom${index + 1}` as ThemeMode)}
          >
            <div className="p-4 rounded" style={{ backgroundColor: theme.main }}>
              <div className="mb-4">
                <h2 className="text-xl font-bold mb-2" style={{ color: "#000" }}>{theme.name}</h2>
              </div>
              <div className="rounded overflow-hidden">
                <div className="px-6 py-4" style={{ backgroundColor: theme.header, color: theme.headerText }}>
                  <div className="font-bold text-xl mb-2" style={{ color: theme.text }}>Header</div>
                </div>
                <div className="flex">
                  <div className="w-1/4 px-6 py-4" style={{ backgroundColor: theme.sidebar, color: theme.sidebarText }}>
                    <div className="font-bold text-xl mb-2" style={{ color: theme.text }}>Sidebar</div>
                    <div className="font-bold text-xl mb-2" style={{ color: theme.sidebarSelected }}>選択</div>
                    <p className="text-base" style={{ color: theme.text }}>Selected</p>
                  </div>
                  <div className="w-3/4 px-6 py-4" style={{ backgroundColor: theme.main, color: theme.mainText }}>
                    <div className="font-bold text-xl mb-2" style={{ color: theme.text }}>Main</div>
                    <p className="text-base" style={{ color: theme.text }}>Content goes here</p>
                  </div>
                </div>
                <div className="px-6 py-4" style={{ backgroundColor: theme.footer, color: theme.footerText }}>
                  <div className="font-bold text-xl mb-2" style={{ color: theme.text }}>Footer</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemeColors;
