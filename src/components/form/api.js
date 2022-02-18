const { default: apiClient } = require("../../api/api-client");
const { default: apiUrls } = require("../../api/apis");

const register = async (
  dataToSend,
  successCallback = () => {},
  failCallback = () => {}
) => {
  try {
    const { data = {} } = await apiClient.post(apiUrls.register, dataToSend);
    successCallback(data);
  } catch (err) {
    failCallback(err);
  }
};

export { register };
