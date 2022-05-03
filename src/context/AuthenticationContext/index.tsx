import React, { useContext, useEffect, useState } from "react";
import Authentication from "../../services/auth";

interface IAuthenticationContext {
  token: string | null;
}

const AuthenticationWrapper =
  React.createContext<IAuthenticationContext | null>(null);
const AuthenticationUpdaterWrapper = React.createContext<any | null>(null);

const useAuthenticationContext = () => {
  const contextValue = useContext(AuthenticationWrapper);
  const contextUpdater = useContext(AuthenticationUpdaterWrapper);

  return [contextValue, contextUpdater];
};

const AuthenticationContext = ({ children }: { children: any }) => {
  const [contextObject, setContextObject] = useState<IAuthenticationContext>({
    // token: Authentication.getToken(),
    token: "",
  });

  const updateContextObject = (value: IAuthenticationContext) => {
    setContextObject(value);
  };

  return (
    <AuthenticationWrapper.Provider value={contextObject}>
      <AuthenticationUpdaterWrapper.Provider value={updateContextObject}>
        {children}
      </AuthenticationUpdaterWrapper.Provider>
    </AuthenticationWrapper.Provider>
  );
};

const authContext = { useAuthenticationContext, AuthenticationContext };

export default authContext;
