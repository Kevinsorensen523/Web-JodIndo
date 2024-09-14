import React from "react";
import { Button } from "@chakra-ui/react";

const CustomButton = ({ children, ...props }) => {
    return (
        <Button variant="mainButton" {...props}>
            {children}
        </Button>
    );
};

export default CustomButton;
