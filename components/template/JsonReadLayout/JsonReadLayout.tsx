import React from 'react';
import Sidebar from '@/components/template/Sidebar/Sidebar';

const JsonReadLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   return <div className="flex-1 p-6">{children}</div>;
};

export default JsonReadLayout;