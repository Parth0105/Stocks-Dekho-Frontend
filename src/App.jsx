import { CssBaseline, ThemeProvider } from '@mui/material';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Navbar/Search';
import AllStocks from './pages/AllStocks';
import { BankHistory } from './pages/BankHistory';
import BuyStock from './pages/BuyStock';
import { HoldingPage } from './pages/Holdings';
import Home from './pages/Home';
import { LoginPage } from './pages/Login';
import { Portfolio } from './pages/Portoflio';
import Profile from './pages/profile';
import SellStock from './pages/SellStock';
import StockPage from './pages/StockPage';
import { TransactionHistory } from './pages/TransactionHistory';
import AppTheme from './theme';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <CssBaseline />
        <ThemeProvider theme={AppTheme}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/allstocks" element={<AllStocks />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/:symbol" element={<StockPage />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
            <Route path="/holdings" element={<HoldingPage />}></Route>
            <Route path="/transactionHistory" element={<TransactionHistory />}></Route>
            <Route path="/bankHistory" element={<BankHistory />}></Route>
            <Route path="/buy/:symbol" element={<BuyStock />}></Route>
            <Route path="/sell/:symbol" element={<SellStock />}></Route>
          </Routes>
        </ThemeProvider>
      </HashRouter>
    </div>
  );
}

export default App;
