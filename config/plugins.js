module.exports = ({ env }) => ({
    // ...
    upload: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('cloud_name'),
        api_key: env('api_key'),
        api_secret: env('api_secret'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
    // ...
  });