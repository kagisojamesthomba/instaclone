import Auth from '../components/Auth';
import Feed from './../components/Feed/index';
import { useState } from 'react';

export default function HomePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return isAuthenticated ? <Feed /> : <Auth />;
}
