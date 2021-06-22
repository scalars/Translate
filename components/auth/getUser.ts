async function GetUser ( Auth: any ) {
    return await Auth.currentAuthenticatedUser();
}

export default GetUser;
