import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    components: {
        Button: {
            variants: {
                mainButton: {
                    bg: "#EF9525",
                    color: "#FFFFFF",
                    _hover: {
                        bg: "#E6D8C8",
                    },
                },
                secondButton: {
                    bg: "#FFFFFF",
                    color: "#EF9525",
                    border: "1px solid #EF9525",
                    _hover: {
                        bg: "#E6D8C8",
                    },
                },
            },
        },
    },
});

export default theme;
