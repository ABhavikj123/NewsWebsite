import CountryContext from "./Context";
import { useState } from "react";

const Countrystate =(props)=>{
    const [search,setSearch]=useState("");
    const change =(coun)=>{
        setSearch(coun)
    }
return(
    <>
    <CountryContext.Provider value={{search,change,setSearch}}>
    {props.children}
    </CountryContext.Provider>
    </>
)
}

export default Countrystate
