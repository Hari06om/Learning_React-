import { createContext, useContext } from "react";




export const ThemeContext = createContexte({

    themeMode: "light",
    darkTheme: ()=>{

    },
    lightTheme:()=>{

    }
});





export const ThemeProvider = ThemeContext.Provider;

export default function useTheme(){
    return useContext(ThemeContext)
}
