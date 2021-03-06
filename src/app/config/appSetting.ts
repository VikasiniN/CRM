import { environment } from '../../environments/environment';
export const AppSetting: AppSettingType = {
    awsServiceUrl: 'http://ec2-13-126-16-163.ap-south-1.compute.amazonaws.com:3020/',
    local3021CrmServiceUrl: 'http://localhost:3021/',
    serviceUrl: environment.serviceUrl,
    // serviceUrl: 'https://rinteger.com/adminservice/'
    /* imagePath: 'http://localhost/ucchal' */
    imagePath: 'http://ucchal.com/admin/crm/images'
};
