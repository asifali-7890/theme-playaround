
export default function SettingsPage() {
    return (
        <div>
            <h1 className="text-2xl font-bold text-foreground">
                Settings
            </h1>

            <p className="mt-2 text-muted-foreground">
                Manage your dashboard preferences.
            </p>

            <div className="mt-8 max-w-2xl space-y-6 rounded-xl border border-border bg-card p-6">
                <div>
                    <h2 className="font-semibold text-foreground">
                        General Settings
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Configure your account preferences.
                    </p>
                </div>

                <div className="border-t border-border pt-5">
                    <label className="text-sm font-medium text-foreground">
                        Display Name
                    </label>
                    <input
                        type="text"
                        defaultValue="Asif Ali"
                        className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-primary"
                    />
                </div>

                <div className="border-t border-border pt-5">
                    <label className="text-sm font-medium text-foreground">
                        Email Address
                    </label>
                    <input
                        type="email"
                        defaultValue="asif@example.com"
                        className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-primary"
                    />
                </div>
            </div>
        </div>
    );
}
