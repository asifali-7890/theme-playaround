
type StatCardProps = {
    title: string;
    value: string;
    change: string;
};

export default function StatCard({
    title,
    value,
    change,
}: StatCardProps) {
    return (
        <div className="rounded-xl border border-border bg-card p-5">
            <p className="text-sm text-muted-foreground">
                {title}
            </p>

            <h3 className="mt-2 text-2xl font-bold text-foreground">
                {value}
            </h3>

            <p className="mt-2 text-sm text-green-600">
                {change}
            </p>
        </div>
    );
}
