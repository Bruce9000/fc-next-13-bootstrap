import { MainLayout } from "@/components/main-layout";
import { PropsWithChildren } from "react";

import "./globals.css";

export const metadata = {
    title: {
        default: "Next Project",
        template: "%s | Next Project",
    },
};

const RootLayout = ({ children }: PropsWithChildren<{}>) => {
    return (
        <html lang="en">
            <body>
                <MainLayout>{children}</MainLayout>
            </body>
        </html>
    );
};

export default RootLayout;
