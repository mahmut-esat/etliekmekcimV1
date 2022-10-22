export default function (errorCode) {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Invalid Email Address';
    case 'auth/email-already-in-use':
      return 'Girilen email adresi daha önce kayıt olmuştur.';
    case 'auth/weak-password':
      return 'Weak Password';
    case 'auth/wrong-password':
      return 'Hatalı Şifre, Lütfen tekrar deneyiniz..';
    case 'auth/user-not-found':
      return 'Email adresi hatalı';
    case 'auth/too-many-requests':
      return 'Çok Fazla Hatalı Deneme !!';
    default:
      return errorCode;
  }
}
