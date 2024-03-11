// components/atoms/LinkButton.tsx
import Link from 'next/link';
import React from 'react';

interface LinkButtonProps {
  href: string;
  label: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, label }) => <Link href={href}>{label}</Link>;

export default LinkButton;
