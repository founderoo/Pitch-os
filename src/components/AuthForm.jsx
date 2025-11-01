





















import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { signInWithEmailPassword, signInWithGoogle } from '../firebase';
import { useAuthStore } from '../store/auth';

export const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { loading } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailPassword(email, password);
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="max-w-md w-full space-y-4">
      <Button 
        onClick={signInWithGoogle}
        disabled={loading}
        className="w-full flex gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 1 1 0-12.064c1.835 0 3.456.989 4.579 2.551l3.814-3.548A10.033 10.033 0 0 0 12 2C6.695 2 2.333 6.477 2.333 12S6.695 22 12 22c5.25 0 9.667-4.479 9.667-10 0-.752-.104-1.496-.3-2.215H12.545z"/>
        </svg>
        Continue with Google
      </Button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with email
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <Button type="submit" className="w-full" disabled={loading}>
          Sign In
        </Button>
      </form>
    </div>
  );
};
