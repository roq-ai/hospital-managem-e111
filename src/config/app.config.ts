interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Hospital Administrator'],
  customerRoles: ['Customer'],
  tenantRoles: ['Hospital Administrator', 'Medical Staff', 'Billing Staff'],
  tenantName: 'Hospital',
  applicationName: 'Hospital Management Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Edit your personal information',
    'Book a hospital',
    'View hospital information',
    'Checkout the hospitals',
  ],
  ownerAbilities: [
    'Manage user information',
    'Manage hospital information',
    'Assign users to hospitals',
    'Manage hospital-user relationships',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/255e6d92-6732-4b3e-9257-6cf1284bf4b2',
};
