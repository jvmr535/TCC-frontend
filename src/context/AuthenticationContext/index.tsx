import React, { useContext, useState } from "react";
import Authentication from "../../services/auth";
import { verify } from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();

interface IAuthenticationContext {
  token: string | null;
  isAdmin: boolean;
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
  const token = Authentication.getToken();

  // const decodeJwt = (token: string | null): any => {
  //   if (token) {
  //     return verify(token.split(" ")[1], process.env.SECRET_WORD as string);
  //   }
  //   return null;
  // };

  // const { isAdmin } = decodeJwt(token).user;

  const isAdmin = true;
  const [contextObject, setContextObject] = useState<IAuthenticationContext>({
    token,
    isAdmin,
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
