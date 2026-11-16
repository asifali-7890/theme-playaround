import StatCard from "@/components/dashboard/stat-card";
import Analytics from "@/components/dashboard/analytics";


export default function Home() {

    const stats = [
        {
            title: "Total Revenue",
            value: "$45,231",
            change: "+12.5%",
        },
        {
            title: "Total Users",
            value: "2,350",
            change: "+8.2%",
        },
        {
            title: "Orders",
            value: "1,240",
            change: "+5.4%",
        },
        {
            title: "Conversion Rate",
            value: "3.8%",
            change: "-1.2%",
        },
    ];

    return (
        <main className="flex-1" >

            <h2 className="text-2xl font-bold text-foreground">
                Dashboard Overview
            </h2>

            <p className="mt-2 text-muted-foreground">
                Welcome to your dashboard.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <StatCard
                        key={stat.title}
                        title={stat.title}
                        value={stat.value}
                        change={stat.change}
                    />
                ))}
            </div>
            <Analytics />
        </main >
    );
}
