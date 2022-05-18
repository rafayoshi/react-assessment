import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import Table, { TableRow } from "../../components/Table/Table";

export interface ICompany {
    id: number;
    name: string;
    vatin: string;
}

function CompanyList() {
    const [companies, setCompanies] = useState<ICompany[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        api.get('/companies').then((response) => {
            setCompanies(response.data);
        }, (() => {
            setError("Failed to load companies");
        }));
    }, []);

    const columns = [
        'Company name', 'vatin'
    ];

    function getTableRows(): TableRow[] {
        return companies.map(company => {
            return {
                cells: [
                    { content: (<Link to={`/company/${company.id}`}>{company.name}</Link>) },
                    { content: company.vatin },
                ]
            };
        })
    }

    return (
        <>
            {error ? error :
                <div>
                    <header>
                        <h1>Companies</h1>
                    </header>
                    <Table rows={getTableRows()} columns={columns}></Table>
                </div>
            }
        </>
    );
}

export default CompanyList;
