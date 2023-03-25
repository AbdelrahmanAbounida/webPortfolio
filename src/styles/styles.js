export const styles = {
    fonts: {
      title: "Space Grotesk, sans-serif",
      main: "Space Grotesk, sans-serif"
    },
    // Colors for layout
    colors: {
      primary1: "hsl(204,23.8%,95.9%)",
      background1: "#0F1624",
      accent1: "hsl(34.9,98.6%,72.9%)",
      button: "hsl(205.1,100%,36.1%)",
      background2: "hsl(232.7,27.3%,23.7%)",
    },
    // Breakpoints for responsive design
    breakpoints: {
      sm: 'screen and (max-width: 640px)',
      md: 'screen and (max-width: 768px)',
      lg: 'screen and (max-width: 1024px)',
      xl: 'screen and (max-width: 1280px)'
    },
    titleStyles :{
        fontWeight:800,
        // mt:12,
        width: 'max-content',
        background: "linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%)",
        mb:1,
        fontSize:{xs:48,md:67},
        mx:"inherit",
        mx:{xs:"auto",lg:"inherit"}

        // p:58
      },
      TextStyles : {
        fontSize:{lg:24,md:22,sm:19,xs:18},
        maxWidth:{lg:700,md:670},
        fontWeight:300,
        pb:3.6,
        color:"rgba(255,255,255,0.6)",
        mx:{md:"auto",lg:"inherit"},
      },
      ButtonStyles : {
        color:"white",
        width:{xs:240,md:262},
        height:{xs:60,md:64},
        borderRadius:50,
        fontSize:24,
        fontWeight:600,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        background:'#1d716e',
        cursor:"pointer",
        transition:"0.5 ease",
        position:'relative',
        overFlow:"hidden",
        alignSelf:{xs:"center",lg:"inherit"},
        '&:hover': {
          backgroundColor: "#2a8c8a",
          scale:1.05
       }
      }
}
