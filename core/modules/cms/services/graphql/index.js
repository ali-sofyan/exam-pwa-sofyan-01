import { useQuery, useLazyQuery, useMutation } from '@apollo/client';
import * as Schema from '@core_modules/cms/services/graphql/schema';
import { getLoginInfo } from '@helper_auth';

let isLogin = 0;
if (typeof window !== 'undefined') {
    isLogin = getLoginInfo();
}

export const getCmsPage = (variables) => useQuery(Schema.getCmsPage, {
    variables,
    context: {
        request: isLogin ? 'internal' : '',
    },
    ...(isLogin && { fetchPolicy: 'network-only' }),
});
export const getInstagramToken = () => useLazyQuery(Schema.getInstagramToken);

// mutation
export const getInstagramFeed = () => useMutation(Schema.getInstagramFeed, {
    context: {
        request: 'internal',
    },
});

export default { getCmsPage };
