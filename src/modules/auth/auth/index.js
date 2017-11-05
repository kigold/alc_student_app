class Auth {
    static loggedIn() {
      //return !!sessionStorage.jwt;
      console.log('logged in');
      return { id:1, name:'Kingsley'};
    }
  
    static logOut() {
      //sessionStorage.removeItem('jwt');
      console.log('Logged out');
    }
  }
  
  export default Auth;