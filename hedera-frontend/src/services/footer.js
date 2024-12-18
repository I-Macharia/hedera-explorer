import React from "react";

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <div style={{ marginBottom: "10px" }}>
                <p>&copy; {new Date().getFullYear()} Hedera Token Explorer. All rights reserved.</p>
            </div>
            <div>
                <a href="https://hedera.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                    Learn More About Hedera
                </a>
                <span style={separatorStyle}>|</span>
                <a href="/terms" style={linkStyle}>
                    Terms of Service
                </a>
                <span style={separatorStyle}>|</span>
                <a href="/privacy" style={linkStyle}>
                    Privacy Policy
                </a>
            </div>
        </footer>
    );
};

const footerStyle = {
    background: "#5558ea",
    color: "#fff",
    textAlign: "center",
    padding: "20px 0",
    fontSize: "14px",
    position: "relative",
    bottom: "0",
    width: "100%",
};

const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    margin: "0 10px",
    transition: "color 0.3s ease",
};

const separatorStyle = {
    color: "#fff",
    margin: "0 10px",
};

export default Footer;
