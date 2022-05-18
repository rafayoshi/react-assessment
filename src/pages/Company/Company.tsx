import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { capitalize, formatPhoneNumber } from "../../helpers/helpers";
import api from "../../services/api";
import Table, { TableRow } from "../../components/Table/Table";

export interface ICompanyNumber {
    id: string;
    type: string;
    company_id: number;
}

export interface ICompany {
    id: number;
    name: string;
    vatin: string;
}

function Company() {
    const { companyId } = useParams();

    const [company, setCompany] = useState<ICompany[]>([]);
    const [phoneNumbers, setNumbers] = useState<ICompanyNumber[]>([]);

    const navigate = useNavigate();

    useEffect(() => {

        let mounted = true;
        api.get(`/phone_numbers?company_id=${companyId}`).then(response => {
            if (mounted) {
                setNumbers(response.data);
            }
        });

        return () => { mounted = false; }

    }, [companyId]);

    useEffect(() => {

        let mounted = true;

        api.get(`/companies?id=${companyId}`).then(response => {
            if (mounted) {
                setCompany(response.data);
            }
        });

        return () => { mounted = false; }
    }, [companyId]);


    const columns = ['Number', 'Type'];

    function getTableRows(): TableRow[] {
        return phoneNumbers.map(phoneNumber => {
            return {
                cells: [
                    { content: (<Link to={`/number/${phoneNumber.id}`}>{formatPhoneNumber(phoneNumber.id)}</Link>) },
                    { content: capitalize(phoneNumber.type) },
                ]
            };
        })
    }

    return (
        <>
            <button onClick={() => { navigate(-1) }} type="button">
                Go Back
            </button>
            <h1>
                {company.length > 0 && company[0].name}
            </h1>
            <Table rows={getTableRows()} columns={columns} />
        </>
    );
}
export default Company;
