import React from "react";

//this is global context state
const globaldata={


    number:0,
    authToken:'Adfd3999',
    sessionId:"",
    isAuthenticated:false

};

const NumberContext=React.createContext(globaldata.number);

export default NumberContext;



