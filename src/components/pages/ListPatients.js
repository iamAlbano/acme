import Message from '../layout/Message'
import { useLocation } from 'react-router-dom'

export default function ListPatients() {

    const location = useLocation()
    let message = ''

    if(location.state) {
        message = location.state.message
    }

    return (
        <div>
            <h1>Pacientes</h1>

            { message && (
                <Message message={ message } type="success" />
            )}

        </div>
    )
}