import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaExchangeAlt, FaWallet, FaUser } from 'react-icons/fa';
import { useFinance } from '../context/FinanceContext';

const Header = () => {
  const { isMobile } = useFinance();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Disable scroll when menu is open on mobile
  useEffect(() => {
    if (isMobile && menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobile, menuOpen]);

  return (
    <header className="app-header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <span className="logo-icon">💰</span>
            <span className="logo-text">FinanceTracker</span>
          </Link>
        </div>
        
        {isMobile && (
          <button 
            className={`menu-toggle ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        )}

        <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                {isMobile ? <FaHome className="nav-icon" /> : null}
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/transactions" 
                className={`nav-link ${location.pathname === '/transactions' ? 'active' : ''}`}
              >
                {isMobile ? <FaExchangeAlt className="nav-icon" /> : null}
                <span>Transactions</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/budgets" 
                className={`nav-link ${location.pathname === '/budgets' ? 'active' : ''}`}
              >
                {isMobile ? <FaWallet className="nav-icon" /> : null}
                <span>Budgets</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/profile" 
                className={`nav-link ${location.pathname === '/profile' ? 'active' : ''}`}
              >
                {isMobile ? <FaUser className="nav-icon" /> : null}
                <span>Profile</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;