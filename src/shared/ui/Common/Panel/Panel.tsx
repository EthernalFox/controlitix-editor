import type { FC, ReactNode } from 'react';

type PanelProps = {
  children: ReactNode;
};

const Panel: FC<PanelProps> = ({ children }) => {
  return <aside>{children}</aside>;
};

export default Panel;
