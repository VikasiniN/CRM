export class InterB2bMarket {
    _id: string;
    customerName: string;
    countryCode: string;
    mobileNumber: string;
    whatsAppNo: string;
    landLine: string;
    email: string;
    country: string;
    location: string;
    companyName: string;
    companyAddress: string;
    gstNumber: string;
    customerGrade: string;
    brandName: string;
    constructor(
        customerName: string,
        countryCode: string,
        mobileNumber: string,
        whatsAppNo: string,
        landLine: string,
        email: string,
        location: string,
        country: string,
        companyName: string,
        companyAddress: string,
        gstNumber: string,
        customerGrade: string,
        brandName: string
    ) {
        this.customerName = customerName;
        this.mobileNumber = mobileNumber;
        this.countryCode = countryCode;
        this.whatsAppNo = whatsAppNo;
        this.landLine = landLine;
        this.email = email;
        this.location = location;
        this.country = country;
        this.companyName = companyName;
        this.companyAddress = companyAddress;
        this.gstNumber = gstNumber;
        this.customerGrade = customerGrade;
        this.brandName = brandName;
    }
}
