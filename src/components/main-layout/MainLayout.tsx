"use client";

import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { LicenseInfo } from "@mui/x-license-pro";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import theme from "src/theme";
import RootStyleRegistry from "./RootStyleRegistry";

const queryClient = new QueryClient();

LicenseInfo.setLicenseKey(`${process.env.NEXT_PUBLIC_MUI_PRO_LICENSE}`);

const MainLayout = ({ children }: PropsWithChildren<{}>) => {
    return (
        <QueryClientProvider client={queryClient}>
            <RootStyleRegistry>
                <ThemeProvider theme={theme}>{children}</ThemeProvider>
            </RootStyleRegistry>
        </QueryClientProvider>
    );
};

export default MainLayout;
