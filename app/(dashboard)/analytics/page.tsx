
import Analytics from "@/components/dashboard/analytics";

export default function AnalyticsPage() {
    return (
        <div>
            <h1 className="text-2xl font-bold text-foreground">
                Analytics
            </h1>

            <p className="mt-2 text-muted-foreground">
                Monitor your revenue and business performance.
            </p>

            <Analytics />
        </div>
    );
}
