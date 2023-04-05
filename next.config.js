/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        dirs: ["app", "pages", "src"],
    },
    experimental: {
        appDir: true,
    },
    modularizeImports: {
        "@mui/material": {
            transform: "@mui/material/{{member}}",
        },
        "@mui/icons-material": {
            transform: "@mui/icons-material/{{member}}",
        },
    },
};

module.exports = nextConfig;
