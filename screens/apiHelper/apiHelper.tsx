
/*
  you can set your Header config. as well your backend side needed.
  this is normal default header config.
*/

import { AlertBox, responseCodes } from "../utilies/constant";
import i18n from "../utilies/i18n";

//Normal_Post
export const Post_Api = async (Url: RequestInfo, params: any , accessToken : any) => {
  return await fetch(
    Url,
    params
      ? {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(params),
        }
      : {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        },
  )
    .then(response => response.json())
    .then(json => {
      console.log('URL :::', Url);

      console.log('dsdadasdas', json);
      const JsonData = checkOfResponseValidation(json);
      console.log('JsonData', JsonData);
      return JsonData;
    })
    .catch(error => {
      AlertBox({
          Title: i18n.Alert, Message: error.toString() + '!',
          onOkPress: undefined,
          onCancelPress: undefined,
          isCancelAvailable: undefined,
          ButtonTitle: undefined,
          CancelTitle: undefined
      });
      return error;
    });
};

//Form_Data_Post
export const Post_Form_Data_Api = async (Url: RequestInfo, params: any , accessToken : any) => {
  return await fetch(Url, {
    method: 'POST',
    headers: {
      // Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${accessToken}`,
    },
    body: params,
  })
    .then(response => response.json())
    .then(json => {
      console.log('json', json);
      const JsonData = checkOfResponseValidation(json);
      console.log('JsonData', JsonData);
      return JsonData;
    })
    .catch(error => {
      AlertBox({
          Title: i18n.Alert, Message: error.toString() + '!',
          onOkPress: undefined,
          onCancelPress: undefined,
          isCancelAvailable: undefined,
          ButtonTitle: undefined,
          CancelTitle: undefined
      });
      return error;
    });
};

//Normal_Get
export const Get_Api = async (Url: RequestInfo, params: any, accessToken : any) => {
  return await fetch(Url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then(response => response.json())
    .then(json => {
      const JsonData = checkOfResponseValidation(json);
      Promise.resolve(JsonData);
    })
    .catch(error => {
      AlertBox({
          Title: i18n.Alert, Message: 'Something Went Wrong!',
          onOkPress: undefined,
          onCancelPress: undefined,
          isCancelAvailable: undefined,
          ButtonTitle: undefined,
          CancelTitle: undefined
      });
      Promise.reject(error);
    });
};

//check All Validation of API
const checkOfResponseValidation = (response: { status_code: any; message: any; }) => {
  if (response?.status_code === responseCodes.OK) {
    return response;
  } else if (response?.status_code === responseCodes.UNAUTHORIZED) {
    AlertBox({
        Title: i18n.Alert,
        Message: response?.message,
        onOkPress: () => {
            // NavigationService.resetAndRedirect(ScreenName.Welcome);
        },
        onCancelPress: undefined,
        isCancelAvailable: undefined,
        ButtonTitle: undefined,
        CancelTitle: undefined
    });
  } else {
    AlertBox({
        Title: i18n.Alert, Message: response?.message,
        onOkPress: undefined,
        onCancelPress: undefined,
        isCancelAvailable: undefined,
        ButtonTitle: undefined,
        CancelTitle: undefined
    });
  }
};
