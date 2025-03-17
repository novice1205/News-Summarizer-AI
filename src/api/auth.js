import nhost from "./api";

// Register User
export const registerUser = async (email, password) => {
  const { session, error } = await nhost.auth.signUp({ email, password });
  return { session, error };
};

// Login User
export const loginUser = async (email, password) => {
  const { session, error } = await nhost.auth.signIn({ email, password });
  return { session, error };
};

// Logout
export const logoutUser = async () => {
  await nhost.auth.signOut();
};
