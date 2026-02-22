import React, { createContext, useState } from 'react';

// 1. Create the blank memory vault
export const AuthContext = createContext();

// 2. Create the "Provider" that will wrap our app and hold the data safely
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // This will hold your logged-in email!

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};