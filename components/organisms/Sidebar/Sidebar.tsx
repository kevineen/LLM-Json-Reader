// components/organisms/Sidebar.tsx
import React from 'react';

import LinkButton from '../../atoms/LinkButton/LinkButton';

const Sidebar: React.FC = () => (
  <div style={{ width: 250, height: '100vh', background: '#f0f0f0' }}>
    <ul>
      <li>
        <LinkButton href="/" label="ホーム" />
      </li>
      <li>
        <LinkButton href="/about" label="アバウト" />
      </li>
    </ul>
  </div>
);

export default Sidebar;
