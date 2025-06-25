import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'; 
import PassangersTable from '../features/admin/components/PassangersTable';

const router = createBrowserRouter([
    {
        path: '/',
        element: <div><h1>App</h1>
            <Link to={'/admin-table'}>Admin Table</Link>
        </div>
    },
    {
        path: '/admin-table',
        element: <PassangersTable />
    }
]
);

export const Router = () => <RouterProvider router={router} />;