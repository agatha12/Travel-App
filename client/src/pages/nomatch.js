import React from "react";
import { Container } from "../components/Input";

function NoMatch() {
    return (
        <div className="text-center">
        <Container fluid>
            <h1>404 Page Not Found</h1>
            <h1> 
            <span role="img" aria-label="Face With Rolling Eyes Emoji">
            😛
            </span>
            </h1>
        </Container>
        </div>
    );
}

export default NoMatch;