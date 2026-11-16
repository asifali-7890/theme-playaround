
"use client";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { month: "Jan", revenue: 1200 },
    { month: "Feb", revenue: 2100 },
    { month: "Mar", revenue: 1800 },
    { month: "Apr", revenue: 2800 },
    { month: "May", revenue: 2400 },
    { month: "Jun", revenue: 3500 },
];

export default function Analytics() {
    return (
        <div id="analytics" className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">

            <section className="rounded-xl border border-border bg-card p-6 lg:col-span-2">
                <h2 className="mb-6 text-lg font-semibold text-foreground">
                    Revenue Analytics
                </h2>

                <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data}>

                            <XAxis
                                dataKey="month"
                                tick={{ fill: "var(--muted-foreground)" }}
                                axisLine={false}
                                tickLine={false}
                            />

                            <YAxis
                                tick={{ fill: "var(--muted-foreground)" }}
                                axisLine={false}
                                tickLine={false}
                            />

                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "#18181b",
                                    border: "1px solid #3f3f46",
                                    color: "#ffffff",
                                }}
                                wrapperStyle={{
                                    backgroundColor: "var(--card)",
                                    zIndex: 50,
                                }}
                                cursor={{ fill: "var(--accent)", opacity: 0.4 }}
                            />

                            <Bar
                                dataKey="revenue"
                                fill="#3b82f6"
                                radius={[6, 6, 0, 0]}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </section>

            <section className="rounded-xl border border-border bg-card p-6">
                <h2 className="mb-5 text-lg font-semibold text-foreground">
                    Recent Transactions
                </h2>

                <div className="space-y-5">
                    {[
                        { name: "John Doe", amount: "+$250" },
                        { name: "Sarah Smith", amount: "+$180" },
                        { name: "Michael Lee", amount: "+$420" },
                        { name: "Emma Wilson", amount: "+$150" },
                    ].map((transaction) => (
                        <div
                            key={transaction.name}
                            className="flex items-center justify-between"
                        >
                            <span className="text-sm text-muted-foreground">
                                {transaction.name}
                            </span>

                            <span className="font-semibold text-foreground">
                                {transaction.amount}
                            </span>
                        </div>
                    ))}
                </div>
            </section>


            <section className="mt-8 rounded-xl border p-6 bg-card border-border">
                <h2 className="text-xl font-bold">
                    Project Activity
                </h2>

                <p className="mt-2 text-s text-muted-foreground">
                    Track your recent project updates and progress.
                </p>

                <div className="mt-6 space-y-4">
                    {[
                        { title: "Website Redesign", status: "Completed", progress: "100%" },
                        { title: "Mobile Application", status: "In Progress", progress: "65%" },
                        { title: "API Integration", status: "Pending", progress: "25%" },
                    ].map((project) => (
                        <div
                            key={project.title}
                            className="flex items-center justify-between transition-colors text-muted-foreground hover:bg-accent hover:text-accent-foreground rounded-lg border border-border p-4"
                        >
                            <div>
                                <h3 className="font-semibold text-emerald">{project.title}</h3>
                                <p className="mt-1 text-sm">{project.status}</p>
                            </div>

                            <span className="text-sm font-semibold text-violet">
                                {project.progress}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}
