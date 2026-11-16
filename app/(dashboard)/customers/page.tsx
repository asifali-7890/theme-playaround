
const customers = [
    { name: "John Doe", email: "john@example.com", status: "Active" },
    { name: "Sarah Smith", email: "sarah@example.com", status: "Active" },
    { name: "Michael Lee", email: "michael@example.com", status: "Inactive" },
    { name: "Emma Wilson", email: "emma@example.com", status: "Active" },
];

export default function CustomersPage() {
    return (
        <div>
            <h1 className="text-2xl font-bold text-foreground">
                Customers
            </h1>

            <p className="mt-2 text-muted-foreground">
                Manage your customers and their accounts.
            </p>

            <div className="mt-8 overflow-x-auto rounded-xl border border-border bg-card">
                <table className="w-full text-left text-sm">
                    <thead className="border-b border-border text-muted-foreground">
                        <tr>
                            <th className="p-4">Name</th>
                            <th className="p-4">Email</th>
                            <th className="p-4">Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {customers.map((customer) => (
                            <tr key={customer.email} className="border-b border-border last:border-0">
                                <td className="p-4 font-medium text-foreground">
                                    {customer.name}
                                </td>
                                <td className="p-4 text-muted-foreground">
                                    {customer.email}
                                </td>
                                <td className="p-4">
                                    <span className={customer.status === "Active" ? "text-green-600" : "text-red-500"}>
                                        {customer.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
