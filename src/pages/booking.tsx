import { Helmet } from 'react-helmet-async';

import BookingView from 'src/sections/users/booking';

// ----------------------------------------------------------------------

export default function BookingPage() {
    return (
        <>
            <Helmet>
                <title>Booking List</title>
            </Helmet>

            <BookingView />
        </>
    );
}
