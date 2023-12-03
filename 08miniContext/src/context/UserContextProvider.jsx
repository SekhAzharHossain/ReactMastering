import React from "react";
import UserConstext from "./UserContext";

const UserContextProvider = ({ childern }) => {
  const [user, SetUser] = React.useState(null);

  return (
    <UserConstext.Provider value={{ user, SetUser }}>
      {childern}
    </UserConstext.Provider>
  );
};

export default UserContextProvider;
