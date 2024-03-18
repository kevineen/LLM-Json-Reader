'use client'

import { useState } from "react";
import { useRecoilState } from "recoil";
import { customThemeColorsAtom, themeAtom } from "@/state/atmos/themeAtom";

const ThemeColors = () => {
  const [, setTheme] = useRecoilState(themeAtom);
  const [customColors, setCustomColors] = useRecoilState(customThemeColorsAtom);
  const [editingThemeIndex, setEditingThemeIndex] = useState<number | null>(null);

  const handleThemeChange = (selectedTheme: string) => {
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
            onClick={() => handleThemeChange(`custom${index + 1}`)}
          >
            <div className="p-4 rounded" style={{ backgroundColor: theme.main }}>
              <div className="mb-4">
                <h2 className="text-xl font-bold mb-2">{theme.name}</h2>
                <p className="text-sm">クリックしてこのテーマを選択</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(theme).map(([key, color]) => (
                  <div
                    key={key}
                    className="p-2 rounded"
                    style={{ backgroundColor: color }}
                  >
                    <p className="text-sm">{key}</p>
                  </div>
                ))}
              </div>
            </div>
            <button
              className="mt-2 px-4 py-2 rounded bg-white text-black"
              onClick={(e) => {
                e.stopPropagation();
                setEditingThemeIndex(index);
              }}
            >
              編集
            </button>
            {editingThemeIndex === index && (
              <div className="mt-4">
                {Object.entries(theme).map(([key, value]) => (
                  <div key={key} className="mb-2">
                    <label className="block">{key}</label>
                    <input
                      type="color"
                      value={value}
                      onChange={(e) => handleColorChange(index, key, e.target.value)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemeColors;
