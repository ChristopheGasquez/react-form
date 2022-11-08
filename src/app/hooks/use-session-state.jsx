import { useEffect, useState } from 'react';

export default function useSessionState(key, defaultValue) {
  const currentSession = window.sessionStorage.getItem(key);
  const [ session, setSession ] = useState(currentSession ? JSON.parse(currentSession) : defaultValue);

  useEffect(() => {
    window.sessionStorage.setItem(key, JSON.stringify(session));
  }, [ session ]);

  return [ session, setSession ];
}
