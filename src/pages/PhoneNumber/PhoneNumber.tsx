import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { capitalize, formatPhoneNumber } from "../../helpers/helpers";
import api from "../../services/api";
import Table, { TableRow } from "../../components/Table/Table";

interface IPhoneNumber {
    id: string;
    type: string;
}

function PhoneNumber() {

    const { numberId } = useParams();

    const navigate = useNavigate();

    const [phoneNumber, setPhoneNumber] = useState<IPhoneNumber | null>(null);

    useEffect(() => {
        if (numberId) {
            getPhoneNumberById(numberId);
        }
    }, [numberId]);

    async function getPhoneNumberById(phoneNumberId: string) {
        try {
            const response = await api.get(`/phone_numbers?id=${phoneNumberId}`)
            const phoneNumbers = response.data
            if (phoneNumbers && phoneNumbers.length > 0) {
                setPhoneNumber(phoneNumbers[0]);
            }
        }
        catch (err) {
            console.error(err);
        }
    }

    function getTableRows(number: IPhoneNumber): TableRow[] {
        if (!number) {
            return [];
        }

        return [{
            cells: [
                { content: (<p>{formatPhoneNumber(number.id)}</p>) },
                { content: (<p>{capitalize(number.type)}</p>) },
            ]
        }];
    }

    return (<>
        <button type="button" onClick={() => { navigate(-1) }}>
            Go Back
        </button>

        {phoneNumber &&
            <Table rows={getTableRows(phoneNumber)} />
        }

    </>);

}
export default PhoneNumber;