import React from "react";
import UserConstext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, SetUser] = React.useState(null);

  return (
    <UserConstext.Provider value={{ user, SetUser }}>
      {children}
    </UserConstext.Provider>
  );
};

export default UserContextProvider;
