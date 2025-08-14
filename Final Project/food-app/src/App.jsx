import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './components/Loading';
import Header from './components/Header';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Menu = lazy(() => import('./pages/Menu'));
const Cart = lazy(() => import('./pages/Cart'));
const Checkout = lazy(() => import('./pages/Checkout'));
const FoodDetails = lazy(() => import('./pages/FoodDetails'));

const App = () => {
  return (
    <Router>
      <Header />
      <Suspense fallback={ <Loading /> }>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/food/:id' element={<FoodDetails />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  )
}

export default App;