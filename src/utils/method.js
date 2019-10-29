import CryptoJS from 'crypto-js';

export function encryptObject(obj) {

  const strObj = JSON.stringify(obj)
  const encryptStrObj = CryptoJS.AES.encrypt(strObj, 'secret key');
  // console.log("encrypted object: ", encryptStrObj.toString());

  return encryptStrObj.toString()
}

export function decryptObject(obj) {

  const bytes = CryptoJS.AES.decrypt(obj, 'secret key');
  const decryptObj = bytes.toString(CryptoJS.enc.Utf8);
  console.log("decrypted object", decryptObj);

  return JSON.parse(decryptObj)

}