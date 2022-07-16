import { ReactNode } from 'react';
import 'components/Page/Page.scss';

function Page({ children }: { children: ReactNode }) {
  return (
    <div className="page" data-testid="page">
      {children}
    </div>
  );
}

export default Page;
