import * as httpRequest from '~/utils/httpRequest';
export const searchAPI = async (q,type ='less') => {
    try{
      const res =  await httpRequest.method({
        method: 'get',
        url: 'users/search',

        params: {
          q,
          type
        },
      });
    //   setSearchResults(res.data);
    //   setLoading(false);
    return res.data;
    }
    catch(err){

    }
      

    }