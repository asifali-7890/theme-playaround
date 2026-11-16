
import Sidebar from "@/components/dashboard/sidebar";
import Navbar from "@/components/dashboard/navbar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen flex-col bg-background md:flex-row">
            <Sidebar />

            <div className="flex flex-1 flex-col">
                <Navbar />

                <main className="flex-1 p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
