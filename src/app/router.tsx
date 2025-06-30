import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'; 
import PassangersTable from '../entities/PassangersTable';

const router = createBrowserRouter([
    {
        path: '/',
        element: <div><h1>App</h1>
            <Link to={'/passenger-table'}>Passenger Table</Link>
        </div>
    },
    {
        path: '/passenger-table',
        element: <PassangersTable />
    }
]
);

export const Router = () => <RouterProvider router={router} />;