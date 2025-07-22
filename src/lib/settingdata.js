export const settingsData = [
  {
    id: 1,
    title: 'Conversation Initiation Client Data Webhook',
    description:
      'Configure the webhook that will be called when a new Twilio phone call or SIP trunk call conversation begins.',
    buttonLabel: 'Add webhook',
    drawerComponent: 'Webhookdrawer',
  },
  {
    id: 2,
    title: 'Workspace Secrets',
    description: 'Create and manage secure secrets that can be accessed across your workspace.',
    buttonLabel: 'Add secret',
    drawerComponent: 'Secretdrawer',
  },
  {
    id: 3,
    title: 'Post-Call Webhook',
    description:
      'Select the webhook that will be called when a conversation ends. Webhooks can be managed in the settings page.',
    buttonLabel: 'Create Webhook',
    drawerComponent: 'Webhookmodal',
  },
];
