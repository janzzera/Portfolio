export const projects = [
    {
        id: 'onetap',
        name: 'OneTap',
        badge: 'Capstone',
        tagline: 'Homeowners association management platform',
        repo: 'https://github.com/Ggkyle/OneTap',
        summary: 'A web app we built as a team of 3 for our capstone. It helps homeowners association admins and officers manage their community: announcements, facilities reservations, issue reporting, and a lightweight violations tracker. We also added a chatbot so residents can find what they need without digging through menus. Separate dashboards for residents, officers, and admins.',
        tech: ['PHP', 'Laravel', 'MySQL', 'Tailwind CSS', 'Livewire', 'Leaflet.js'],
        specs: [
            { label: 'Role-Based Access', value: 'Three separate dashboards (resident, officer, admin) with middleware-based role gating so each user only sees what they\'re supposed to.' },
            { label: 'Real-Time Feel', value: 'Used Livewire for reactive UI updates, so announcements, reservation statuses, and issue reports update without full page reloads.' },
            { label: 'Map Integration', value: 'Leaflet.js for community map views, letting officers pin and visualize reported issues by location within the subdivision.'}
        ],
        screenshots: ['/images/onetap-1.png', '/images/onetap-2.png', '/images/onetap-3.png'],
    },
    {
        id: 'kilgi',
        name: 'Kilgi',
        badge: 'Personal Project',
        tagline: 'Merchandising & accounting app for vegetable vendors',
        repo: 'https://github.com/janzzera/Kilgi',
        summary: 'An Android app I\'m building for vegetable vendors who need a simple way to track their merchandise and money. You can batch-input purchases, log expenses and spoilages, then record end-of-day sales (retail or wholesale). It also tracks payables and receivables, and generates real accounting outputs: general journal, T-accounts, trial balance, income statement, owner\'s equity statement, and balance sheet. It works offline too. Everything you enter is saved on the phone first, then synced to the cloud database through the Kilgi API once you\'re back online.',
        tech: ['Java', 'Android Studio', 'Jetpack Compose', 'Room Database', 'Data Sync'],
        specs: [
            { label: 'Accounting Engine', value: 'Built a full double-entry bookkeeping system from scratch: general journal, T-accounts, and auto-generated trial balance and financial statements.' },
            { label: 'Offline-First Sync', value: 'Room Database stores batch purchases, spoilage logs, sales records, and payables/receivables locally. Offline writes get queued and pushed to the cloud DB through the Kilgi API when the connection comes back.' },
            { label: 'UI', value: 'Jetpack Compose for a modern declarative UI. Batch input forms, daily sales summaries, and financial statement views, all native Android.'}
        ],
        screenshots: ['/images/kilgi-1.png', '/images/kilgi-2.png', '/images/kilgi-3.png'],
    },
    {
        id: 'kilgiapi',
        name: 'Kilgi API',
        badge: 'Personal Project',
        tagline: 'Backend API',
        repo: 'https://github.com/janzzera/KilgiAPI',
        summary: 'The backend for Kilgi. It\'s a REST API the Android app talks to for posting and getting data from the cloud database. Whenever the app saves a purchase, sale, or expense, it ends up here and gets stored in Supabase Postgres. Requests are secured with JWT tokens, so each vendor only gets access to their own records. It\'s deployed on Render, so the app can reach it from anywhere.',
        tech: ['C#', '.NET Web API', 'JWT', 'Supabase', 'PostgreSQL', 'Render'],
        specs: [
            { label: 'REST Endpoints', value: 'Built with ASP.NET Core Web API. Endpoints for posting and fetching purchases, sales, expenses, and accounting records used by the app.' },
            { label: 'Auth', value: 'JWT token authentication. The app logs in once, gets a token, and sends it with every request so the API knows who\'s asking.' },
            { label: 'Cloud DB', value: 'Supabase Postgres as the cloud database. Acts as the source of truth that the Android app syncs its offline data to.'}
        ],
        screenshots: [],
    }
]