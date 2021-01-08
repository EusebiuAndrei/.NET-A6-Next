const authReqHeader = (ctx) => {

    return {
        headers:
            { authorization: 'Bearer ' + ctx.req.headers.cookie.replace('userToken=', '') }
    };
}

export default authReqHeader;