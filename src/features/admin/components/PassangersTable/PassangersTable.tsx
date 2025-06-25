import { Table } from "../../../../shared/ui/DataTable/Table";
import { usePassangersTable } from "./usePassangersTable";
import { Pagination } from 'antd';

export const PassangersTable = () => {
    const {
        data, 
        columns, 
        isLoading,
        handleEdit
    } = usePassangersTable();

    // Loader
    if (isLoading || !data) return <div>Loading...</div>; 

    return (
        <>
        <Table data={data} columns={columns} onRowClick={handleEdit} />
        <Pagination />
        </>
    );
};