import { AccountBalanceWallet, History, MonetizationOn, Wallet } from '@mui/icons-material';
import { Avatar, Box, Button, Stack, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { getAuth } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { app } from '../components/Firebase';

function Profile() {
  const user = getAuth(app);
  return (
    <>
    <Container maxWidth="sm">
      <Box
        sx={{
          backgroundImage: 'linear-gradient(180deg, #7abbfc80,#7abbfc00 300px)',
          borderRadius: '20px',
          py: 1,
          my: 2
        }}>
        <Stack alignItems="center" sx={{ my: 2 }}>
          <Avatar
            src={
              user.currentUser != null && user.currentUser.photoURL != null
                ? user.currentUser.photoURL
                : 'https://lens-storage.storage.googleapis.com/png/4cde995e-9c55-4ed0-8f6d-e9aebd5d5596'
            }
            sx={{ width: '150px', height: '150px' }}
          />
          <Typography variant="h5" textAlign="center">
            {user.currentUser != null ? user.currentUser.displayName : 'Name'}
          </Typography>
          <Stack direction="column" flex={1} justifyContent="center" marginTop={2}>
            <Typography variant="caption" textAlign="center">
              Current Balance
            </Typography>
            <Typography variant="h1" fontWeight="bold" textAlign="center">
              ₹16.55
            </Typography>
            <Stack direction="column" flex={1} justifyContent="center" marginTop={2}>
              <Typography variant="caption" textAlign="center">
                Current Balance
              </Typography>
              <Typography variant="h1" fontWeight="bold" textAlign="center">
                ₹16.55
              </Typography>
            </Stack>
          </Stack>

          <Stack direction="row" gap={2} flex={1} justifyContent="center">
            <Button
              size="large"
              component={Link}
              to={'/transactionHistory'}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'primary.light',
                textTransform: 'none'
              }}>
              <AccountBalanceWallet fontSize="large" color="primary" />
              <Typography variant="caption" display="block">
                Transaction
              </Typography>
            </Button>

            <Button
              size="large"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'primary.light',
                textTransform: 'none'
              }}>
              <History fontSize="large" color="primary" />
              <Typography variant="caption" display="block">
                History
              </Typography>
            </Button>

            <Button
              size="large"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'primary.light',
                textTransform: 'none'
              }}>
              <MonetizationOn fontSize="large" color="primary" />
              <Typography variant="caption" display="block">
                Balance
              </Typography>
            </Button>

            <Button
              size="large"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'primary.light',
                textTransform: 'none'
              }}>
              <Wallet fontSize="large" color="primary" />
              <Typography variant="caption" display="block">
                Holdings
              </Typography>
            </Button>
          </Stack>

          <Box marginTop={5}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Recent Transactions
            </Typography>
          </Box>
          </Stack>
        </Box>
      </Container>
      <TransactionLogCard log={transactions.slice(0, 5)} loading={loading} error={error} />
    </>
  )
}

export default Profile;
