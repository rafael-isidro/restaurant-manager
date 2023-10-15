const aws = require('aws-sdk');

const endpoint = new aws.Endpoint(process.env.ENDPOINT_BACKBLAZE);

const s3 = new aws.S3({
  endpoint,
  credentials: {
    accessKeyId: process.env.KEY_ID,
    secretAccessKey: process.env.APP_KEY,
  },
});

const sendPicture = async (path, buffer, mimetype) => {
  const image = await s3
    .upload({
      Bucket: process.env.BACKBLAZE_BUCKET,
      Key: path,
      Body: buffer,
      ContentType: mimetype,
    })
    .promise();

  return {
    path: image.Key,
    url: `https://${process.env.BACKBLAZE_BUCKET}.${process.env.ENDPOINT_BACKBLAZE}/${image.Key}`,
  };
};

module.exports = {
  sendPicture,
};
