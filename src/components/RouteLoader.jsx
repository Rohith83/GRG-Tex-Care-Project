import { useLocation } from 'react-router-dom';

export default function RouteLoader() {
  const { pathname } = useLocation();

  return (
    <div
      key={pathname}
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-[2px] origin-left animate-route-loader bg-dark-2"
    />
  );
}
