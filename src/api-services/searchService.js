import * as request from '~/utils/request';
export const searchAPI = async (q,type ='less') => {
    try{
      const res =  await request.method({
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