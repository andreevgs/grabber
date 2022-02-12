import axios from 'axios';

const API_URL = 'https://cre-api-v2.kufar.by/items-search/v1/engine/v1/search/rendered-paginated?lang=ru&ot=1&query=%D0%B0%D0%B9%D1%84%D0%BE%D0%BD%208&size=42';
const KUFAR_IMAGES_URL = 'https://yams.kufar.by/api/v1/kufar-ads/images/35';

const kufarOfferFormatter = (kufarResponse) => {
    const formattedOffers = kufarResponse['ads'];

    return {
        items: formattedOffers.map((offer) => {
            return {
                title: offer['subject'],
                cost: offer['price_byn'].toString().slice(0, -2),
                image: `${KUFAR_IMAGES_URL}/${offer['images'][0]['id']}.jpg?rule=gallery`
            }
        }),
        totalItems: kufarResponse['total'],
        pages: Math.round(+kufarResponse['total'] / 42),
        currentPage: 1
    }
}

const getOffers = (query, page) => {
    return axios.get(API_URL).then(response => {
        return kufarOfferFormatter(response.data);
    });
};

const OffersService = {
    getOffers
};

export default OffersService;