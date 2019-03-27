import generateRandoms from '../utils/GetRandomString';

const newCustomer = {
    firstName: `customer-first-${generateRandoms()}`,
    bithYear: `customer-bithYear-${generateRandoms()}`,
    lastName: `customer-last-${generateRandoms()}`,
    email: `customerAutoTest${generateRandoms()}@alefeducation.com`,
    password: '12345',
    phoneNumber: `+49${generateRandoms()}`
};

export default newCustomer;
