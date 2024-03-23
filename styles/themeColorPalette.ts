export interface ThemeColors {
  name: string;
  header: string;
  headerText: string;
  sidebar: string;
  sidebarText: string;
  sidebarSelected: string;
  sidebarHover: string;
  main: string;
  mainText: string;
  footer: string;
  footerText: string;
  text: string;
  link: string;
  cardBg: string; // カードの背景色
  cardText: string; // カードのテキスト色
}


// light テーマカラー
export const lightColors = {
  header: '#f8f9fa',
  headerText: '#333333',
  sidebar: '#e9ecef',
  sidebarText: '#333333',
  sidebarSelected: '#aec4e8',
  sidebarHover: '#ced4da',
  main: '#ffffff',
  mainText: '#333333',
  footer: '#dee2e6',
  footerText: '#333333',
  text: '#212529',
  link: '#007bff',
  cardBg: '#fff', // 白
  cardText: '#333', // 暗いグレー
};

// dark テーマカラー
export const darkColors = {
  header: '#343a40',
  headerText: '#f8f9fa',
  sidebar: '#495057',
  sidebarText: '#f8f9fa',
  sidebarSelected: '#2c272d',
  sidebarHover: '#ced4da',
  main: '#212529',
  mainText: '#f8f9fa',
  footer: '#343a40',
  footerText: '#f8f9fa',
  text: '#f8f9fa',
  link: '#00d4ff',
  cardBg: '#333', // 暗いグレー
  cardText: '#fff', // 白
};
